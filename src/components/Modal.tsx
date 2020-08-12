import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type Props = Readonly<{
  isShowing: boolean;
  hide: () => void;
}>;

const Component: React.FCX<Props> = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Hello, I am a modal.</p>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

const StyledComponent = styled(Component)``;

export default StyledComponent;
