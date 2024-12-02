import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const navigate = useNavigate();

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your User has been deleted.",
                icon: "success",
              });
              const newUsers = users.filter((user) => user._id !== id);
              setUsers(newUsers);
            }
          });
      }
    });
  };
  return (
    <div className="py-10">
      <SectionTitle title={"Our Users"} slug="Welcome Our users" />
      <div className="w-full md:w-10/12 mx-auto py-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Create At</th>
                <th>Last Login At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr className="hover" key={user?._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.createdAt}</td>
                  <td>{user?.lastSignInTime}</td>
                  <td>
                    <Link
                      to={""}
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-[22px] text-[#000000] hover:bg-transparent hover:text-[#EA4744]"
                    >
                      <MdOutlineDeleteOutline />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
