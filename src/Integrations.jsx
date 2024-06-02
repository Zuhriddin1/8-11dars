import ads from "./assets/ads.jpg";
import slack from "./assets/slack.jpg";
import face from "./assets/facebook.jpg";
import link from "./assets/in.png";
import gmail from "./assets/gmai.png";
import web from "./assets/web.webp";
import sale from "./assets/sales.png";

const integrations = [
  {
    name: "Slack",
    description:
      "Slack is an instant messaging program designed by Slack Technologies and owned by Salesforce.",
    enabled: true,
    logo: slack,
  },
  {
    name: "Facebook",
    description:
      "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook.",
    enabled: false,
    logo: face,
  },
  {
    name: "LinkedIn",
    description:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    enabled: true,
    logo: link,
  },
  {
    name: "Google Ads",
    description:
      "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings.",
    enabled: false,
    logo: ads,
  },
  {
    name: "Gmail",
    description:
      "Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide.",
    enabled: false,
    logo: gmail,
  },
  {
    name: "Salesforce",
    description:
      "It provides customer relationship management software and applications focused on sales, customer service, marketing automation.",
    enabled: false,
    logo: sale,
  },
  {
    name: "Hubspot",
    description:
      "American developer and marketer of software products for inbound marketing.",
    enabled: false,
    logo: web,
  },
];

const Integrations = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="card shadow-lg compact bg-base-100">
            <div className="card-body">
              <img
                src={integration.logo}
                alt={integration.name}
                className="w-[90px] h-[80px] mb-4"
              />
              <h2 className="card-title">{integration.name}</h2>
              <p>{integration.description}</p>
              <label className="swap swap-rotate mt-4">
                <input type="checkbox" defaultChecked={integration.enabled} />
                <div className="swap-on">On</div>
                <div className="swap-off">Off</div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Integrations;