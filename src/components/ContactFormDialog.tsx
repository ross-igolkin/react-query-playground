import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGetQueryData } from "hooks";
import Contact from "types/contact";
import { useMutation, UseMutationResult } from "react-query";
import Client from "services/Client";
import { LoggedInUser } from "types";
import { ContactRole } from "enums";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export default function ContactFormDialog() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { contactId } = useParams();

  const mutation = useMutation<Partial<Contact>, Error, Partial<Contact>, undefined>(
    (newTodo) => Client.update("contact", contactId, newTodo),
    {
      onSuccess: (data, variables, context) => {
        // Boom baby!
      },
    }
  );

  const initData = useGetQueryData<Contact[]>("contact")?.find((contact) => contact.id === contactId);

  const user = useGetQueryData<LoggedInUser>("user/me");

  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const toSend = {
      ...data,
      organizationId: user?.organizationId,
      role: ContactRole.Underwriter,
    };
    mutation.mutate(toSend);
  };

  console.log(watch("firstName"));

  useEffect(() => {
    handleClickOpen();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      disableRestoreFocus
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionProps={{
        onExited: () => {
          navigate(-1);
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <input defaultValue={initData?.firstName} {...register("firstName")} />
          <input defaultValue={initData?.lastName} {...register("lastName")} />
          <input defaultValue={initData?.email} {...register("email")} />
          <input defaultValue={initData?.phoneNumber} {...register("phoneNumber")} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} type="submit">
            Agree
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
