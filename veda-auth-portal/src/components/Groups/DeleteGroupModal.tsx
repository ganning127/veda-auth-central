/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText
} from "@chakra-ui/react";
import { useState } from "react";
import { BACKEND_URL } from "../../lib/constants";

export const DeleteGroupModal = ({
  isOpen,
  onClose,
  groupId,
  auth,
  navigate,
}: {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
  auth: any;
  navigate: any;
  currOwner: string;
}) => {
  const [typedGroupId, setTypedGroupId] = useState("");

  const handleDeleteGroup = async () => {
    const resp = await fetch(`${BACKEND_URL}/api/v1/group-management/groups/${groupId}`, {
      headers: {
        Authorization: `Bearer ${auth.user?.access_token}`,
      },
      method: "DELETE"
    });

    if (resp.ok) {
      navigate('/groups');
    }
  }



  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please confirm</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Are you sure you want to delete this group?</FormLabel>
                <Input
                  type="text"
                  placeholder="group id"
                  value={typedGroupId}
                  onChange={(e) => setTypedGroupId(e.target.value)}
                />

                <FormHelperText>
                  Please type the Group ID ({groupId}) above to confirm.
                </FormHelperText>
            </FormControl>

            <Button
              w='full'
              colorScheme="red"
              mt={4}
              isDisabled={typedGroupId !== groupId}
              onClick={handleDeleteGroup}
            >
              Delete
            </Button>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
