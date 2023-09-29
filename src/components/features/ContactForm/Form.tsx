import { Button, CircularProgress, TextField } from "@mui/material";
import { styled } from "styled-components";
import emailjs from '@emailjs/browser';
import useInput from "../../../hooks/useInput";
import { useEffect, useMemo, useState } from "react";


function Form() {
    const [name,onChangeName] = useInput();
    const [email,onChangeEmail] = useInput();
    const [message,onChangeMessage] = useInput();
    const [isLoading,setLoading]= useState(false)

   
    const onSubmit = async () => {
       
      //   const serviceId = import.meta.env.VITE_SERVICE_ID
      //   const templateId= import.meta.env.VITE_TEMPLATE_ID
      //   const params = {
      //       from_name: name,
      //       message,
      //   }
      //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params, 'YOUR_PUBLIC_KEY')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      };

    const isDisabled = useMemo(()=>{
        return !message.trim().length || !name.trim().length || !email.trim().length
    },[message,name,email])

    useEffect(() => emailjs.init(import.meta.env.VITE_PUBLIC_KEY ), []);
  return (
    <>
      <Wrapper>
        <Row>
          <TextField value={name} onChange={(e)=>onChangeName(e.target.value)} fullWidth size="small" type="text" label="Name" />
          <TextField value={email} onChange={(e)=>onChangeEmail(e.target.value)} fullWidth size="small" type="email" label="Email" />
        </Row>

        <TextField
        value={message}
        onChange={(e)=>onChangeMessage(e.target.value)}
          size="small"
          type="text"
          label="Address"
          fullWidth
          multiline
          rows={4}
        />
      </Wrapper>
      {
        isLoading ? <CircularProgress/>
        :
      <Button
        style={{ background: "#7a282c", fontWeight: 200 }}
        onClick={onSubmit}
        variant="contained"
        disabled={isDisabled}
      >
        Submit
      </Button>
      }
    </>
  );
}

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-bottom: 1rem;
`;
const Row = styled("div")`
  display: flex;
  gap: 10px;
`;
export default Form;
