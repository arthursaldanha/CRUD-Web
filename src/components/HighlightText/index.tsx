import { convertToLower } from '../../utils/string';
import { Text, VariantsText, WeightsText } from '../Text';

interface HighLightProps {
  text: string;
  toHighlight: string;
  variant: VariantsText;
  weight: WeightsText;
  color: string;
}

export const HighlightText = ({
  text,
  toHighlight,
  variant,
  weight,
  color,
}: HighLightProps) => {
  const regex = new RegExp(`(${toHighlight})`, 'i');

  return (
    <>
      {text.split(regex).map((chunk, index) => {
        if (convertToLower(chunk) === convertToLower(toHighlight)) {
          return (
            <Text key={index} variant={variant} weight={weight} color={color}>
              {chunk}
            </Text>
          );
        }

        return chunk;
      })}
    </>
  );
};
