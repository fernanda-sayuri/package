//#region imports
// import DGOLogo from 'img/dgo-logo.png'
//#endregion

const url = 'https://cms.dev.hub.directvgo.com/o/'
const id = 'id-527e2c52-dbd6-80f1-1bb2-4e9417ec3c7d'

export const Login = () => {
  const validToken = () => {
    window.location.replace(
      `${url}oauth2/authorize?response_type=code&client_id=${id}`
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-[#1E232F]">
      <div className="flex flex-col items-center text-white">
        <img src={''} alt="" width={60} className="mb-[24px]" />

        <h1 className="text-[20px] font-bold mb-[8px]">SKY</h1>
        <p className="mb-[48px]">PackageEntitlement</p>

        <button onClick={validToken} className="h-[48px] w-[428px]">Login</button>
      </div>
    </div>
  )
}