import { useCookies } from 'react-cookie';



export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie', 'cookie_with_expiration_date']);

  return (
    <>
      <div>
        <label htmlFor="cookie">Cookie: </label>
        <input name="cookie" value={cookies.cookie || ""} onChange={(e) => {
          setCookie('cookie', e.target.value, { path: '/' });
        }}  />
        <br />
        <button onClick={(e) => {
          console.log('click cookie')
          removeCookie('cookie')
        }}>
          Remover
        </button>
      </div>
      <br />

      <div>
        <label htmlFor="cookie">Cookie com data de expiração: </label>
        <input name="cookie_with_expiration_date" value={cookies.cookie_with_expiration_date || ""} onChange={(e) => {
          const date = new Date();
          const msec = 1000 * 5; 
          date.setTime(date.getTime() + msec);
          setCookie('cookie_with_expiration_date', e.target.value, { path: '/', expires: date });
        }} />
        <br />
        <button onClick={(e) => {
          console.log('click cookie_with_expiration_date')
          removeCookie('cookie_with_expiration_date')
        }}>
          Remover
        </button>
      </div>
    </>
  );
}
