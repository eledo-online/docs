import React, { useEffect, useMemo, useState } from 'react';

/**
 * Eledo-like feedback component for Docusaurus / MDX.
 *
 * Behavior:
 * 1) Show inline helpful / not helpful prompt
 * 2) Open modal after vote
 * 3) Persist "already submitted" state per document
 * 4) After submission, show thank-you state instead of vote buttons
 *
 * For the mockup, persistence uses localStorage.
 * Later, this can be swapped for cookie-backed or server-backed logic.
 */

type Vote = 'yes' | 'no';

type FeedbackPayload = {
  docId?: string;
  docTitle?: string;
  pageUrl?: string;
  vote: Vote;
  comment?: string;
  timestamp: string;
};

type SubmitResult = {
  ok: boolean;
};

type Props = {
  docTitle?: string;
  docId?: string;
  pageUrl?: string;
};

type DocMetadata = {
  id?: string;
  title?: string;
  permalink?: string;
};

type DocContext = {
  metadata?: DocMetadata;
};

async function mockSubmit(payload: FeedbackPayload): Promise<SubmitResult> {
  console.log('Feedback payload:', payload);
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
  return { ok: true };
}

export default function DocFeedbackForm({
  docId,
  docTitle,
  pageUrl,
}: Props): React.JSX.Element {

  const resolvedDocId = docId ?? undefined;

  const resolvedPageUrl =
    pageUrl ??
    (typeof window !== 'undefined' ? window.location.pathname : undefined);

  const resolvedDocTitle = docTitle;

  const storageKey = useMemo(() => {
    return `doc-feedback:${docId || resolvedPageUrl || docTitle || 'unknown'}`;
  }, [docId, resolvedPageUrl, docTitle]);

  const [vote, setVote] = useState<Vote | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState<boolean>(false);
  const [showThankYouModal, setShowThankYouModal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(storageKey);
    if (stored === 'submitted') {
      setAlreadySubmitted(true);
    }
  }, [storageKey]);

  function handleVote(nextVote: Vote): void {
    if (alreadySubmitted) {
      return;
    }

    setVote(nextVote);
    setOpen(true);
  }

  function closeModal(): void {
    setOpen(false);
  }

  function closeThankYouModal(): void {
    setShowThankYouModal(false);
  }

  async function handleSubmit(): Promise<void> {
    if (!vote || loading) {
      return;
    }

    setLoading(true);

    try {
      const payload: FeedbackPayload = {
        docId: resolvedDocId,
        docTitle: resolvedDocTitle,
        pageUrl: resolvedPageUrl,
        vote,
        comment: comment.trim() || undefined,
        timestamp: new Date().toISOString(),
      };

      const result = await mockSubmit(payload);

      if (!result.ok) {
        return;
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(storageKey, 'submitted');
      }

      setAlreadySubmitted(true);
      setOpen(false);
      setShowThankYouModal(true);
      setComment('');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
        {!alreadySubmitted ? (
          <div style={{ marginTop: '2rem' }}>
            <h3
              style={{
                marginTop: 'var(--ifm-spacing-vertical)',
                marginBottom: '1rem',
                gap: 'var(--ifm-spacing-horizontal)',
                color: 'var(--ifm-color-primary)',
                fontSize: 'var(--ifm-h4-font-size)',
                fontWeight: 'var(--ifm-heading-font-weight)',
              }}
            >
              Was this article helpful?
            </h3>

            <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
              <VoteButton
                label="Yes"
                icon="👍"
                labelColor="var(--ifm-color-success)"
                onClick={() => handleVote('yes')}
              />
              <VoteButton
                label="No"
                icon="👎"
                labelColor="var(--ifm-color-danger)"
                onClick={() => handleVote('no')}
              />
            </div>
          </div>
        ) : null}

      {open && vote && !alreadySubmitted ? (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <div style={modalHeaderStyle}>
              <div style={modalTitleStyle}>Article feedback</div>
              <button
                onClick={closeModal}
                style={closeStyle}
                aria-label="Close feedback dialog"
                type="button"
              >
                ×
              </button>
            </div>

            <div style={modalBodyStyle}>
              <div style={feedbackSummaryStyle}>
                <div style={iconCircleStyle}>
                  <span
                    style={{
                      fontSize: '1.5rem',
                      lineHeight: 1,
                      color: vote === 'yes' ? 'green' : 'red',
                    }}
                  >
                    {vote === 'yes' ? '👍' : '👎'}
                  </span>
                </div>
                <div style={summaryTextStyle}>
                  {vote === 'yes'
                    ? 'This article was helpful!'
                    : 'This article should be improved!'}
                </div>
              </div>

              <label style={commentLabelStyle} htmlFor="doc-feedback-comment">
                Comment
              </label>

              <textarea
                id="doc-feedback-comment"
                value={comment}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                rows={4}
                style={textareaStyle}
              />
            </div>

            <div style={modalFooterStyle}>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={submitStyle}
                type="button"
              >
                {loading ? 'Sending…' : 'Submit'}
              </button>
              <button onClick={closeModal} style={cancelStyle} type="button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showThankYouModal ? (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <div style={modalHeaderStyle}>
              <div style={modalTitleStyle}>Article feedback</div>
              <button
                onClick={closeThankYouModal}
                style={closeStyle}
                aria-label="Close thank you dialog"
                type="button"
              >
                ×
              </button>
            </div>

            <div style={thankYouBodyStyle}>Thank you for your feedback!</div>

            <div style={modalFooterStyle}>
              <button onClick={closeThankYouModal} style={submitStyle} type="button">
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

type VoteButtonProps = {
  label: string;
  icon: string;
  labelColor: React.CSSProperties['color'];
  onClick: () => void;
};

function VoteButton({ label, icon, labelColor, onClick }: VoteButtonProps): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.35rem',
      }}
    >
      <button
        onClick={onClick}
        type="button"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '999px',
          border: '1px solid #d9d9d9',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'none',
        }}
      >
        <span style={{ fontSize: '1.25rem', lineHeight: 1, color: labelColor }}>{icon}</span>
      </button>
      <div style={{ color: labelColor, fontSize: '1rem' }}>{label}</div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '3rem',
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  background: '#f8f8f8',
  borderRadius: '6px',
  width: 'min(96vw, 620px)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
  overflow: 'hidden',
};

const modalHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1.25rem',
  borderBottom: '1px solid #d6d6d6',
};

const modalTitleStyle: React.CSSProperties = {
  color: '#0b5c66',
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: 1.1,
};

const closeStyle: React.CSSProperties = {
  border: 'none',
  background: 'transparent',
  fontSize: '1.6rem',
  lineHeight: 1,
  color: '#b8b8b8',
  cursor: 'pointer',
  padding: 0,
};

const modalBodyStyle: React.CSSProperties = {
  padding: '1rem 1.25rem',
  borderBottom: '1px solid #d6d6d6',
};

const feedbackSummaryStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1.75rem',
};

const iconCircleStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '999px',
  background: 'white',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const summaryTextStyle: React.CSSProperties = {
  color: '#0b5c66',
  fontWeight: 700,
  fontSize: '1rem',
};

const commentLabelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.6rem',
  color: '#0b5c66',
  fontWeight: 700,
  fontSize: '1.2rem',
};

const textareaStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '88px',
  borderRadius: '4px',
  border: '1px solid #c8c8c8',
  padding: '0.65rem',
  resize: 'vertical',
  background: 'white',
  color: '#222',
  font: 'inherit',
  boxSizing: 'border-box',
};

const modalFooterStyle: React.CSSProperties = {
  padding: '1rem 1.25rem 1.5rem 1.25rem',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.75rem',
};

const thankYouBodyStyle: React.CSSProperties = {
  padding: '1rem 1.25rem',
  color: '#0b5c66',
  fontSize: '1rem',
  borderBottom: '1px solid #d6d6d6',
};

const submitStyle: React.CSSProperties = {
  background: '#10cc32',
  color: 'white',
  border: 'none',
  padding: '0.85rem 1.8rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '1rem',
};

const cancelStyle: React.CSSProperties = {
  background: 'white',
  color: '#0b5c66',
  border: '2px solid #0b5c66',
  padding: '0.75rem 1.6rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '1rem',
};
