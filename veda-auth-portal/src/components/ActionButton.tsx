import { Icon, Button } from "@chakra-ui/react";
interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: any;
  size?: string;
  isDisabled?: boolean;
  colorScheme?: string;
  variant?: string;
}

export const ActionButton = ({ onClick, icon, children, size, isDisabled, colorScheme, variant }: ActionButtonProps) => {
  return (
    <Button
      bg={
        !colorScheme ? "black" : undefined
      }
      color='white'
      _hover={{
        bg: !colorScheme ? "black" : undefined
      }}
      onClick={onClick}
      px={2}
      py={1}
      fontSize='sm'
      size={size}
      isDisabled={isDisabled}
      colorScheme={colorScheme}
      variant={variant}
    >
      {icon && <Icon as={icon} mr={1} fontSize='lg' />}
      {children}
    </Button>
  )
}
