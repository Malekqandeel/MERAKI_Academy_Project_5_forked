import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button
} from "flowbite-react";
import img from "../images/NotNull-logos_transparent.png";
import { setLogin, setUserId } from "../redux/auth/userSlice";
import axios from "axios";
import { useState, Fragment } from "react";
import { setUsers } from "../redux/search/Search";
import { Link } from "react-router-dom";
const NavbarLogin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { photo, nameUsers, isLoggedIn, token, search } = useSelector(
    (state) => {
      return {
        photo: state.personal.personal.photo,
        nameUsers: state.personal.personal,
        token: state.auth.token,
        isLoggedIn: state.auth.isLoggedIn,
        search: state.search.search
      };
    }
  );
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/?name=${name}`);

      const parseResponse = await response.json();

      dispatch(setUsers(parseResponse));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <Avatar img={img} size="xl" />
            </div>
          </div>
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class=" inline justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Team
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <div class="relative ml-3">
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={photo} rounded />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {name.firstname} {name.lastname}{" "}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {name.email}{" "}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    dispatch(setUserId(""));
                    dispatch(setLogin(""));
                    localStorage.clear();
                  }}
                >
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>

      <Fragment>
        <div className="container text-center">
          <h1 className="my-5">Party List</h1>
          <form className="d-flex" onSubmit={onSubmitForm}>
            <input
              type="text"
              name="name"
              placeholder="Enter user ..."
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn btn-success">Submit</button>
          </form>
          <table className="table my-5">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {search.map((user) => (
                <tr key={user.id}>
                  <Link to={`users/${user.id}`}>
                    {user.photo ? <img src={user.photo} /> : <img src="" />}
                  </Link>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {search.length === 0 && <p>No Results Found</p>}
        </div>
      </Fragment>
    </nav>
  );
};

export default NavbarLogin;
