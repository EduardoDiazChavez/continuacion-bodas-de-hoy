import { FC, useState } from "react";
import { LogoFullColor } from "../Icons";
import { BusinessAccess, Providers, RegisterQuestion, ResetPassword } from "./Components";
import FormLogin from "./Forms/FormLogin";
import FormResetPassword from "./Forms/FormResetPassword";
import { FirstStep, SecondStep } from "./Forms/Register/Steps";
import PageLogin from "../../pages/login"

interface propsLogin {
  setStage: CallableFunction;
}

export const Login: FC<propsLogin> = ({ setStage }) => {
  
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <LogoFullColor className="w-auto h-10" />
      </div>
      <Providers setStage={setStage} />
      <FormLogin setStage={setStage} />
      <RegisterQuestion onClick={() => setStage("register")} />
      {/* <BusinessAccess /> */} {/* componente que no esta terminado */}
    </>
  );
};

export const Register: FC<propsLogin> = ({ setStage }) => {
  const [whoYouAre, setWhoYouAre] = useState<string>("");
  const [stageRegister, setStageRegister] = useState(0)
  return (
    <>
      {(() => {
        switch (stageRegister) {
          case 0:
            return <FirstStep setStageRegister={setStageRegister} value={setWhoYouAre} />
            break;
          case 1:
            return <SecondStep setStageRegister={setStageRegister} stageRegister={stageRegister} whoYouAre={whoYouAre} />
            break;
          default:
            return <PageLogin/>
            break;
        }
      })()}

      <h2
        className={`font-light text-tertiary flex gap-2 items-center text-sm `}
      >
        ¿Dispones de una cuenta?
        <span
          className="text-sm text-primary font-semibold cursor-pointer hover:text-tertiary transition"
          onClick={() => setStage("login")}
        >
          Inicia Sesión
        </span>
      </h2>
    </>
  );
};

export const ResetPass: FC<propsLogin> = ({ setStage }) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <LogoFullColor className="w-auto h-10" />
      </div>
      <FormResetPassword setStage={setStage} />
      <h2
        className={`font-light text-tertiary flex gap-2 items-center text-sm `}
      >
        ¿Dispones de una cuenta?
        <span
          className="text-sm text-primary font-semibold cursor-pointer hover:text-tertiary transition"
          onClick={() => setStage("login")}
        >
          Inicia Sesión
        </span>
      </h2>
      {/* <BusinessAccess /> */} {/* componente que no esta terminado */}
    </>
  );
};