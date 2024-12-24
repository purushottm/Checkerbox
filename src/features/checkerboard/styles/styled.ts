// styles.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Controls = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
`;

export const Input = styled.input`
  width: 120px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const MaxClicks = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const Board = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${(props: { size: any }) => props.size}, 1fr);
  gap: 2px;
  background: #ddd;
  padding: 2px;
`;

export const SquareButton = styled.button<{ isblack: boolean }>`
  aspect-ratio: 1;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  background: ${(props: { isblack: any }) =>
    props.isblack ? "#1a1a1a" : "#f0f0f0"};
  color: ${(props: { isblack: any }) => (props.isblack ? "#fff" : "#000")};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
