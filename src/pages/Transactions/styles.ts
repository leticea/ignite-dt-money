import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    border-spacing: 0;

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr;

      + tr {
        margin: 0.5rem 0;
      }
    }

    td {
      width: 100%;
      padding: 0;

      &:first-child {
        border-radius: 6px 6px 0 0;
        grid-column: span 2;
        padding: 1.25rem 2rem 0.5rem 2rem;
      }

      &:nth-child(2) {
        grid-column: span 2;
        font-weight: 700;
        padding: 0.5rem 2rem 0.5rem 2rem;
        font-size: 1.25rem;
      }

      &:nth-child(3) {
        border-radius: 0 0 0 6px;
        color: ${(props) => props.theme["gray-500"]};
        padding: 0.5rem 2rem 1.25rem 2rem;
      }

      &:last-child {
        border-radius: 0 0 6px 0;
        color: ${(props) => props.theme["gray-500"]};
        padding: 0.25rem 2rem 1.25rem 2rem;
        text-align: end;
      }
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
