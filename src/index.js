import React, { Component } from "react";
import { render } from "react-dom";
import {
  Alert,
  Tooltip,
  Select,
  Input,
  Slider,
  Tabs,
  Button,
  Icon
} from "antd";
const Option = Select.Option;
const TabPane = Tabs.TabPane;

const marks = {
  0: "Yes",
  1: "I dont know",
  2: "No"
};

export default class App extends Component {
  state = {
    tab: "0",
    industryName: "",
    context: "",
    fiveForces: [
      {
        title: "Supplier Power",
        questions: [
          {
            noText: "Suppliers are fragmented",
            yesText: "Suppliers are concentrated",
            tooltip: "There are a few suppliers with a large market share",
            label: "Suppliers are concentrated",
            value: 1
          },
          {
            noText: "Low cost to switch suppliers",
            yesText: "High cost to switch suppliers",
            tooltip:
              "It is expensive for market players to find a new supplier",
            label: "High cost to switch suppliers",
            value: 1
          },
          {
            noText: "Suppliers avoid forward integration",
            yesText: "Suppliers create forward integration",
            tooltip: "Suppliers can take over producers",
            label: "Suppliers create forward intergration",
            value: 1
          },
          {
            noText: "Suppliers are many and similar",
            yesText: "Suppliers are few and unique",
            tooltip: "Suppliers follow the differentiation strategy",
            label: "Suppliers are few and unique",
            value: 1
          },
          {
            noText: "Suppliers provide standardised products",
            yesText: "Suppliers provide differentiable products",
            tooltip: "Suppliers' products don't resemble each other",
            label: "Suppliers provide differential products",
            value: 1
          },
          {
            noText: "Suppliers don't limit quantity supplied",
            yesText: "Suppliers can reduce quantity supplied",
            tooltip:
              "Suppliers can intentionally decrease their output to control producers",
            label: "Suppliers can reduce quantity supplied",
            value: 1
          },
          {
            noText: "No cooperation between suppliers",
            yesText: "There is cooperation between suppliers",
            tooltip: "Suppliers form partnerships and alliances",
            label: "There is cooperation between suppliers",
            value: 1
          },
          {
            noText: "Suppliers don't influence the end customer",
            yesText: "Suppliers influence the end customer",
            tooltip:
              "A change in the supply chain will affect consumer behaviour",
            label: "Suppliers influence the end customer",
            value: 1
          }
        ]
      },
      {
        title: "Threat of Substitutes",
        questions: [
          {
            noText: "High consumer switching costs",
            yesText: "Low consumer switching costs",
            tooltip:
              "Consumers will pay a similar price for alternative products",
            label: "Low consumer switching costs",
            value: 1
          },
          {
            noText: "Substitute products are more expensive",
            yesText: "Cheaper substitute products are available",
            tooltip: "Consumers may find cheaper alternative products ",
            label: "Cheaper substitute products are available",
            value: 1
          },
          {
            noText: "Quality varies in the market",
            yesText: "Similar product quality in the market",
            tooltip: "Most products are substitutable in terms of quality",
            label: "Similar product quality in the market",
            value: 1
          },
          {
            noText: "Substitutes perform differently in the market",
            yesText: "Similar substitute performance in the market",
            tooltip:
              "Alternative products have similar sales volume and recognition",
            label: "Similar substitute performance in the market",
            value: 1
          },
          {
            noText: "High product differentiation",
            yesText: "Low product differentiation",
            tooltip:
              "Available products are targeted at similar audiences and segments",
            label: "Low product differentiation",
            value: 1
          },
          {
            noText: "Buyers are conservative",
            yesText: "Buyers want new experiences",
            tooltip:
              "Customers like experimenting with new products and brands",
            label: "Buyers want new experiences",
            value: 1
          },
          {
            noText: "Unique product characteristics",
            yesText: "Standardised product characteristics",
            tooltip:
              "Most products in the market have identical product features",
            label: "Standardised product features and characteristics",
            value: 1
          },
          {
            noText: "Personalised offer in the market",
            yesText: "Lack of personalised offer in the market",
            tooltip:
              "Mass market products are available, while niche products are absent",
            label: "Lack of personalised offer in the market",
            value: 1
          }
        ]
      },
      {
        title: "Buyer Power",
        questions: [
          {
            noText: "Buyers are fragmented",
            yesText: "Buyers are concentrated",
            tooltip: "There are a few buyers with a large market share",
            label: "Buyers are concentrated",
            value: 1
          },
          {
            noText: "Customers know little about the product",
            yesText: "Customers are well informed about the product",
            tooltip:
              "Customers are aware of product features, materials and processes",
            label: "Customers are well informed about the product",
            value: 1
          },
          {
            noText: "Product differentiation is high",
            yesText: "Product differentiation is low",
            tooltip:
              "Products don't have outstanding characteristics and features",
            label: "Product differentiation is low",
            value: 1
          },
          {
            noText: "High transfer cost for switching between products",
            yesText: "Low transfer cost for switching between products",
            tooltip: "Buyers will pay a similar price for alternative products",
            label: "Low transfer cost for switching between products",
            value: 1
          },
          {
            noText: "Backward integration is impossible for buyers",
            yesText: "Backward integration is possible for buyers",
            tooltip: "Buyers can take over producers and suppliers",
            label: "Backward integration is possible for buyers",
            value: 1
          },
          {
            noText: "Demand is inelastic ",
            yesText: "Customers are price sensitive",
            tooltip: "A change in price will influence consumer demand",
            label: "Customers are price sensitive",
            value: 1
          },
          {
            noText: "Buyers purchase a small proportion of the output",
            yesText: "Buyers purchase a large proportion of the output",
            tooltip: "There are exclusive and wholesale buyers",
            label: "Buyers purchase a large proportion of the output",
            value: 1
          },
          {
            noText: "Producers have no access to alternative buyers",
            yesText: "Producers can find alternative buyers",
            tooltip:
              "Buyers compete with each other, supply is smaller than demand",
            label: "Producers can find alternative buyers",
            value: 1
          }
        ]
      },
      {
        title: "Threat of New Entrants",
        questions: [
          {
            noText: "High governmental barriers",
            yesText: "Low governmental barriers",
            tooltip:
              "Government and policies encourage new entrants in the market",
            label: "Low governmental barriers",
            value: 1
          },
          {
            noText: "Limited access to distribution channels",
            yesText: "Easy access to distribution channels",
            tooltip:
              "Retailers, wholesalers and online vendors welcome new companies",
            label: "Easy access to distribution channels",
            value: 1
          },
          {
            noText: "Diverse technologies are used in the market",
            yesText: "Common technology is used in the market",
            tooltip:
              "There is transferrable and easy-to-learn technology in all companies",
            label: "Common technology is used by all market players",
            value: 1
          },
          {
            noText: "High exit barriers",
            yesText: "Low exit barriers",
            tooltip:
              "A new company can easily quit its business at a small cost",
            label: "Low exit barriers",
            value: 1
          },
          {
            noText: "Many franchise brands",
            yesText: "Little brand franchise",
            tooltip: "Franchise brands don't dominate in the market segment",
            label: "Little brand franchise",
            value: 1
          },
          {
            noText: "High scale threshold",
            yesText: "Low scale threshold",
            tooltip: "Unit costs for production are at minimum",
            label: "Low scale threshold",
            value: 1
          },
          {
            noText: "High capital requirement",
            yesText: "Low capital requirement",
            tooltip:
              "New firms don't need substantial funds to enter the industry",
            label: "Low capital requirement",
            value: 1
          },
          {
            noText: "High customer loyalty to the existing brands",
            yesText: "Low customer loyalty to the existing brands",
            tooltip: "Customers don't purchase the same brand each time",
            label: "Low customer loyalty to the existing brands",
            value: 1
          }
        ]
      },
      {
        title: "Degree of Rivalry",
        questions: [
          {
            noText: "A small number of competitors",
            yesText: "A large number of competitors",
            tooltip: "There are many strong rivals in the market segment",
            label: "A large number of competitors",
            value: 1
          },
          {
            noText: "Fast market growth ",
            yesText: "Slow market growth",
            tooltip:
              "The market is not expanding and firms fight for market share",
            label: "Slow market growth",
            value: 1
          },
          {
            noText: "High switching costs",
            yesText: "Low switching costs",
            tooltip: "Customers can easily switch from one product to another",
            label: "Low switching costs",
            value: 1
          },
          {
            noText: "Low storage costs",
            yesText: "High storage costs",
            tooltip:
              "It is expensive for producers to store products in warehouses",
            label: "High storage costs",
            value: 1
          },
          {
            noText: "Low fixed costs",
            yesText: "High fixed costs",
            tooltip:
              "Companies spend much on rent, insurance, interest, salary and wages",
            label: "High fixed costs",
            value: 1
          },
          {
            noText: "High product differentiation",
            yesText: "Low product differentiation",
            tooltip:
              "All products have substitutable features and characteristics",
            label: "Low product differentiation",
            value: 1
          },
          {
            noText: "Low exit barriers",
            yesText: "High exit barriers",
            tooltip:
              "It is very costly to abandon the product or quit the market segment ",
            label: "High exit barriers",
            value: 1
          },
          {
            noText: "High similarity between rivals",
            yesText: "High diversity between rivals",
            tooltip:
              "Competitors represent unique cultures, strategies and values ",
            label: "High diversity between rivals",
            value: 1
          }
        ]
      }
    ]
  };
  setQuestionValue(e, i, qi) {
    let fiveForces = this.state.fiveForces;
    fiveForces[i].questions[qi].value = e;
    this.setState({ fiveForces });
  }
  renderQuestions(q, i, qi) {
    return (
      <tr>
        <td style={{ paddingRight: "10px" }}>
        <label>
          {q.label}
          {q.tooltip && (
            <Tooltip title={q.tooltip}>
              <Icon
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  fontSize: "0.8em",
                  color: "#69c0ff"
                }}
                type="info-circle-o"
              />
            </Tooltip>
          )}
        </label>
        </td>
        <td style={{minWidth: "150px"}}>
        <Slider
          included={false}
          tipFormatter={false}
          marks={marks}
          step={1}
          value={q.value}
          onChange={e => this.setQuestionValue(e, i, qi)}
          max={2}
          style={{ maxWidth: "180px" }}
        /></td>
      </tr>
    );
  }

  nextTab() {
    let tab = parseInt(this.state.tab) + 1;
    this.setState({ tab: tab.toString() });
  }

  prevTab() {
    let tab = parseInt(this.state.tab) - 1;
    this.setState({ tab: tab.toString() });
  }

  render() {
    const { fiveForces, tab, industryName, context } = this.state;
    const tabCount = fiveForces.length + 1;
    const currentForce = fiveForces[tab - 1];
    let blankQuestionCount = 0;
    if (currentForce) {
      blankQuestionCount = currentForce.questions
        .map(function(item) {
          if (item.value == 1) return 1;
          return 0;
        })
        .reduce(function(a, b) {
          return a + b;
        }, 0);
    }
    // if (fiveForces[tab - 1] != 'undefined'){
    //   blankQuestionCount = fiveForces[tab - 1].reduce(function (a, b) {
    //     return a + b;
    //   }, 0);
    // }
    return (
      <div style={{ maxWidth: "750px" }}>
        <Tabs
          tabPosition="left"
          activeKey={tab}
          tabBarExtraContent={this.operations}
        >
          <TabPane tab="Welcome" key="0" style={{ padding: "0.5em 2em" }}>
            <h1>Welcome to Porter's Five Forces Analysis Generator</h1>
            <p>Which industry would you like to analyse?</p>
            <Input
              onChange={e => this.setState({ industryName: e.target.value })}
              value={industryName}
              placeholder="e.g 'Hospitality'"
            />
            <p style={{ marginTop: "10px" }}>
              What country/market is your analysis limited to?
            </p>
            <Input
              onChange={e => this.setState({ context: e.target.value })}
              value={context}
              placeholder="e.g 'UK, EU"
            />
          </TabPane>
          {fiveForces.map((r, i) => (
            <TabPane tab={r.title} key={i + 1} style={{ padding: "0.5em 2em" }}>
              <h1>{r.title}</h1>
              <table>
              {r.questions.map((q, qi) => this.renderQuestions(q, i, qi))}
              </table>
            </TabPane>
          ))}
          <TabPane tab="Results" key="6" style={{ padding: "0.5em 2em" }}>
            <h1>Results</h1>
            <p>
              The {industryName.toLowerCase()} industry in{" "}
              {context == "UK" ||
              context == "US" ||
              context == "USA" ||
              context == "UAE" ||
              context == "KSA" ||
              context == "world" ||
              context == "World" ||
              context == "EU"
                ? "the "
                : " "}
              {context} is shaped by the next competitive forces.
            </p>
            {fiveForces.map(function(r, i) {
              const result = r.questions
                .map(function(item) {
                  if (item.value == 0) return 1;
                  return 0;
                })
                .reduce(function(a, b) {
                  return a + b;
                }, 0);
              return (
                <div>
                  <h3 style={{ marginTop: "1.5em" }}>
                    {r.title}:{" "}
                    {result < 3 ? "LOW" : result < 5 ? "MEDIUM" : "HIGH"}
                  </h3>
                  <div className="results-section">
                    {r.questions.map(function (q, qi) {
                      if (q.value == 0) return <p key={qi}>{q.yesText}</p>;
                      if (q.value == 2) return <p key={qi}>{q.noText}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </TabPane>
        </Tabs>
        {blankQuestionCount > 4 && (
          <Alert
            style={{
              display: "inline-block",
              margin: "0 20px 0 auto",
              float: "right"
            }}
            message="Please, enter more answers to continue. Try our hints."
            type="info"
          />
        )}
        <Button.Group
          style={{
            width: "100%",
            padding: "0.5em 2em",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          {tab != 0 && (
            <Button type="primary" onClick={e => this.prevTab()}>
              <Icon type="left" />Previous
            </Button>
          )}
          {tab != tabCount && (
            <Button
              type="primary"
              disabled={
                industryName == "" || context == "" || blankQuestionCount > 4
              }
              onClick={e => this.nextTab()}
            >
              {industryName == "" || context == ""
                ? "Enter the above to continue"
                : "Next"}
              <Icon type="right" />
            </Button>
          )}
        </Button.Group>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
