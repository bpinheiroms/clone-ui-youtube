import React, { memo } from "react";
import { Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  tooltip?: string;
  disableTooltip?: boolean;
  icon: IconType;
  color?: string;
  callback?: any;
}

const IconHeader: React.FC<Props> = ({
  tooltip,
  icon,
  disableTooltip,
  color,
  callback,
}) => {
  const doSomenthing = () => {
    if (callback) {
      callback();
    }
  };
  return (
    <Tooltip label={tooltip} aria-label={tooltip} isDisabled={disableTooltip}>
      <IconButton
        onClick={doSomenthing}
        aria-label={tooltip}
        icon={<Icon as={icon} w={6} h={6} color={color || "white"} />}
        colorScheme="transparent"
        color={color || "white"}
        m={2}
        h={6}
      />
    </Tooltip>
  );
};

export default memo(IconHeader);