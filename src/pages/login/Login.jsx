import { useState } from "react";
import BreadCrump from "../../components/common/BreadCrump";
import Btn from "../../components/common/Btn";
import Des from "../../components/common/Des";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = { email: "", password: "" };
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Email:", formData.email);
      console.log("Password:", formData.password);
      console.log("Full Form Data:", formData);
    }
  };

  return (
    <Container>
      <div className="">
        <div className="pb-15 ">
          <div>
            <BreadCrump pageLabel="Login" rootpage={"home"} />
          </div>
          <Des
            className="max-w-161"
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
          />
        </div>

        <div className="border-y border-y-gray-white-two">
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Returning Customer
            </h2>
          </div>

          <form className="">
            <div className="grid-cols-2 mb-10 max-w-263 grid gap-x-10">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Email address
                </label>
                <Input
                  name="email"
                  onChange={handleFormChange}
                  type="email"
                  value={formData.email}
                  placeholder="company@domain.com"
                  className="w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-gray-900 text-gray-700 placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Password
                </label>
                <Input
                  name="password"
                  onChange={handleFormChange}
                  type="password"
                  value={formData.password}
                  placeholder="••••••••"
                  className="w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-gray-900 text-gray-700 placeholder-gray-400 tracking-widest"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-2">{errors.password}</p>
                )}
              </div>
            </div>

            <Btn
              onClick={handleLogin}
              type="button"
              className="mb-12"
              label={"Login"}
            />
          </form>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            New Customer
          </h2>

          <Des
            className="max-w-[644px]"
            text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          />

          <Btn url="/registration" label="Registration" className="mt-13" />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
