import "./Tabs.css";

export default function Tabs({ activeTab, setActiveTab, tab1, tab2 }) {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === tab1.key ? "active" : ""}`}
        onClick={() => setActiveTab(tab1.key)}
      >
        {tab1.label}
      </button>
      <button
        className={`tab ${activeTab === tab2.key ? "active" : ""}`}
        onClick={() => setActiveTab(tab2.key)}
      >
        {tab2.label}
      </button>
    </div>
  );
}
