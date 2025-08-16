import type {ReactNode} from 'react';
import styles from './styles.module.css'

type FeatureItem = {
  title: string;
  description: ReactNode;
  url: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: "入学",
    description: <span>新生报到全攻略: <br/>从录取到入住一站式指南! <br/>助你顺利开启湖大生活！</span>,
    url: "./docs/start",
  },
  {
    title: "生活",
    description: "生活描述文本.",
    url: "./docs/life",
  },
  {
    title: "学业",
    description:  <span>学业有困惑？ <br/>一键get√官方解答和学长学姐珍藏经验！</span>,
    url: "./docs/study",
  },
  {
    title: "毕业",
    description: "毕业描述文本.",
    url: "./docs/graduate",
  },
  {
    title: "跃鹿战队",
    description: <>加入湖南大学跃鹿战队, 征战全国大学生机器人大赛, 成就优秀青年工程师</>,
    url: "./docs/study/跃鹿战队"
  },
  {
    title: "六级成绩查询倒计时",
    description: <Band6Time/>,
    url: "https://cjcx.neea.edu.cn/html1/folder/21083/9970-1.htm"
  },
  {
    title: "开学倒计时",
    description: <>24级: <CountDown target={"2025-09-22"}/><br/>25级: <CountDown target={"2025-09-09"}/></>,
    url: "."
  }
];

function Band6Time() {
  const target = new Date('2025-08-16T06:00:00').getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return <span className="badge badge--success">{hours}h {minutes}min</span>;
}

function CountDown(props: { target: string }): ReactNode {
  const target = new Date(props.target).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return <span className="badge badge--success">{days}d {hours}h</span>;
}

function Feature({title, description, url}: FeatureItem): ReactNode {
  return (
    <div className="col col--3">
      <div className="card shadow--md margin-top--lg">
        <div className="card__header">
          <h3 className="text--center">{title}</h3>
        </div>
        <div className="card__body">
          <p className="text--center">{description}</p>
        </div>
        <div className="card__footer">
          <a className={`button button--primary button--block ${styles.button}`} href={url}>
            <span className={`text--secondary ${styles.buttonContent}`}>
              <i className={`fa-solid fa-arrow-right ${styles.icon}`}></i>
              <span className={styles.text}>点击跳转</span>
            </span>
            <span className={`text--secondary ${styles.url}`}>{url.replace('./docs/', '')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className="container margin-bottom--lg">
      <div className="row">
        { FeatureList.map((props, idx) => (
          <Feature key={ idx } { ...props } />
        )) }
      </div>
    </div>
  );
}
