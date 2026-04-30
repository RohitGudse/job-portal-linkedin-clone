export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <DashboardStats />
        <ApplicantsList />
      </div>
    </div>
  );
}