import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import "../scss/smsform.css"

function SMSForm() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [termsAgreed, setTermsAgreed] = React.useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (name && phone && termsAgreed) {
      try {
        // Step 1: Save user information
        const userResponse = await axios.post(
          "http://localhost:3002/api/user/create",
          {
            name,
            phoneNumber: phone,
            termsAgreed,
          }
        );

        if (userResponse.status === 201) {
          toast.success("User information saved successfully", {
            autoClose: 3000,
          });

          // Step 2: Send an SMS
          axios
            .post("http://localhost:3002/api/sms/send-sms", {
              phoneNumber: phone,
              body: `Hello ${name}, this is a test SMS from our service.`,
            })
            .then((smsResponse) => {
              if (smsResponse.status === 200) {
                toast.success("SMS sent successfully", {
                  autoClose: 3000,
                });

                // Clear the form
                setName("");
                setPhone("");
                setTermsAgreed(false);

                // Refresh page after save
                setTimeout(() => {
                  window.location.reload();
                }, 3000);
              } else {
                toast.error("Failed to send SMS");
              }
            })
            .catch((error) => {
              console.error(error);
              toast.error("Failed to send SMS");
            });
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          toast.error("Phone number is already in use", {
            autoClose: 3000,
          });
        } else {
          console.error(error);
          toast.error("Failed to save user information");
        }
      }
    } else {
      toast.error("Please fill in all required fields and agree to the terms.");
    }
  };

  useEffect(() => {
    // JavaScript for smoke text effect
    const text = document.querySelector(".form-text");
    if (text) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

      const letters = document.querySelectorAll(".form-text span");
      for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("mouseover", function () {
          letters[i].classList.add("active");
        });
      }
    }
  }, []);

  return (
    <>
        
    <div className="container ">
    
        
 
      <div className="form-section">
        <div className="form-box bg-white p-6 rounded-lg shadow-md rainbow-border">
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rainbow-border white-placeholder transparent-input"
            />

            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rainbow-border white-placeholder transparent-input"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAgreed}
                  onChange={() => setTermsAgreed(!termsAgreed)}
                />
              }
              label="I agree to these terms of service"
            />

            <Button type="submit" variant="contained" fullWidth>
               Send SMS
            </Button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
    </>
  );
}

export default SMSForm;
