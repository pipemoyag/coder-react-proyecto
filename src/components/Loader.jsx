import { BarLoader } from "react-spinners";

function Loader({ loading, render }) {
  return loading ? (
    <div className="container d-flex justify-content-center my-4">
      <div className="w-50" style={{ maxWidth: "600px" }}>
        <BarLoader width="100%" />
      </div>
    </div>
  ) : (
    render()
  );
}
export default Loader;
