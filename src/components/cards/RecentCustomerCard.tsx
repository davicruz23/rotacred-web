import { recentCustomerData } from "../../data";
import MonthDropdown from "../utils/dropdowns/MonthDropdown";

const RecentCustomerCard = () => {
  return (
    <div className="card full-height">
      <div className="card-header-area mb-3 recent-customer-wrap orders-sales-overview-wrap flex-wrap">
        <h5 className="fw-medium">Recent customers</h5>

        <MonthDropdown />
      </div>

      <div className="table-responsive recent-customer-table">
        <table className="table w-100" id="orderlistTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Company name</th>
              <th>Users</th>
              <th>Billed on</th>
            </tr>
          </thead>

          <tbody>
            {recentCustomerData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.company}</td>
                <td>{item.users}</td>
                <td>{item.billedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RecentCustomerCard;
