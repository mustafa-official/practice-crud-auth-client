import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const updateInfo = { name, quantity, supplier, taste, photo };
    console.log(updateInfo);
    fetch(
      `https://practice-crud-auth-server.vercel.app/user/${loadedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Updated Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <section className="p-6  text-gray-50">
      <button onClick={goBack} className="btn btn-ghost text-black">
        Back
      </button>
      <form
        onSubmit={handleUpdate}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-bold text-3xl">Update</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Coffee Name
              </label>
              <input
                defaultValue={loadedUser?.name}
                name="coffeeName"
                type="text"
                placeholder="Coffee Name"
                className="w-full rounded-md focus:ring py-3 pl-3 focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Quantity
              </label>
              <input
                defaultValue={loadedUser?.quantity}
                name="quantity"
                type="text"
                placeholder="Enter Quantity"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Supplier
              </label>
              <input
                defaultValue={loadedUser?.supplier}
                name="supplier"
                type="text"
                placeholder="Enter Coffee Supplier"
                className="w-full rounded-md focus:ring py-3 pl-3 focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Taste
              </label>
              <input
                defaultValue={loadedUser?.taste}
                name="taste"
                type="text"
                placeholder="Enter Coffee Taste"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>

            <div className="w-full col-span-6">
              <label className="text-sm">Photo URL</label>
              <input
                defaultValue={loadedUser?.photo}
                name="photo"
                type="text"
                placeholder="Enter Photo URL"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-6 mt-6">
              <input
                className="btn btn-accent  btn-block"
                type="submit"
                value="Update"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Update;
