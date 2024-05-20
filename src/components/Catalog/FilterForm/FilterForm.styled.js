import { Field } from "formik";
import styled from "styled-components";
import { PrimaryButton } from "../../../styles/components.styled";

export const FilterContainer = styled.div``;

export const FilterHeader = styled.h2`
  margin: 0 0 24px 0;
`;

export const HorizontalLine = styled.div`
  margin: 0 0 24px 0;
  height: 2px;

  background-color: var(--main);
  opacity: 0.1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const EquipmentButtonGroup = styled(ButtonGroup)`
  margin: 0 0 32px 0;
`;

export const TypeButtonGroup = styled(ButtonGroup)`
  margin: 0 0 64px 0;
`;

export const FilterButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 95px;

  text-align: center;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;

  cursor: pointer;

  &:hover,
  &:has(input:checked) {
    border-color: var(--button);
  }
`;

export const FilterIcon = styled.svg`
  stroke: var(--main);
`;

export const LocationTag = styled.p`
  margin: 0 0 8px;

  font-weight: 500;
  color: var(--main);
  opacity: 0.6;
`;

export const LocationContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;

  background-color: var(--inputs);

  padding: 18px;
  margin: 0 0 32px 0;

  & svg {
    opacity: 0.6;
  }

  &:has(input:not(:placeholder-shown)) svg {
    opacity: 1;
  }
`;

export const LocationInput = styled(Field)`
  padding: 0 0 0 8px;
  width: 100%;

  border: 0;

  line-height: 1.25;
  outline: 0;

  background-color: var(--inputs);

  &::placeholder {
    opacity: 0.6;
  }
`;

export const FilterTag = styled.p`
  margin: 0 0 14px 0;

  font-weight: 500;
  color: var(--secondary);
`;

export const SearchButton = styled(PrimaryButton)`
  padding: 16px 60px;
`;
