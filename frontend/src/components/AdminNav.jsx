function AdminNav() {
  return (
    <>
      <li>
        <Link
          to="/admin/dashboard"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/admin/productlist"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/admin/categorylist"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Category
        </Link>
      </li>
      <li>
        <Link
          to="/admin/orderlist"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Orders
        </Link>
      </li>
      <li>
        <Link
          to="/admin/userlist"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Users
        </Link>
      </li>
    </>
  );
}

export default AdminNav;
