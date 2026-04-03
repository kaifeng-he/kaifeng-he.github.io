import React from 'react';
import './Research.css';

interface PublicationProps {
  title: string;
  authors: React.ReactNode;
  venue?: string;
  link?: string;
  description: string;
  isPreprint?: boolean;
  image?: string;
  coFirst?: boolean;
}

const Publication: React.FC<PublicationProps> = ({ title, authors, venue, link, description, isPreprint, image, coFirst }) => (
  <div className="pub-item">
    <div className="pub-content-wrapper">
      <div className="pub-info">
        <h3 className="pub-title">
          {link ? <a href={link} target="_blank" rel="noreferrer">{title}</a> : title}
          {isPreprint && <span className="preprint-tag">Preprint</span>}
          {coFirst && <span className="co-first-tag">Co-first author</span>}
        </h3>
        <div className="pub-authors">{authors}</div>
        {venue && <div className="pub-venue">{venue}</div>}
        <p className="pub-description">{description}</p>
      </div>
      {image && (
        <div className="pub-image">
          <img src={image} alt={`${title} overview`} />
        </div>
      )}
    </div>
  </div>
);

interface GrantProps {
  title: string;
  role: string;
  period: string;
  funding: string;
  program?: string;
}

const Grant: React.FC<GrantProps> = ({ title, role, period, funding, program }) => (
  <div className="grant-item">
    {program && <div className="grant-program">{program}</div>}
    <div className="grant-header">
      <span className="grant-title">{title}</span>
      <span className="grant-funding">{funding}</span>
    </div>
    <div className="grant-meta">
      <span className="grant-role">{role}</span>
      <span className="grant-period">{period}</span>
    </div>
  </div>
);

const Research: React.FC = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2>Selected Publications</h2>
        <div className="publications-list">
          <Publication 
            title="Towards Better Code Generation: Adaptive Decoding with Uncertainty Guidance"
            authors={<><strong>Kaifeng He</strong>, Mingwei Liu, Chong Wang, Zike Li, Yanlin Wang, Xin Peng, Zibin Zheng</>}
            venue="ACM International Conference on the Foundations of Software Engineering (FSE), 2026"
            link="https://arxiv.org/abs/2506.08980"
            image="/adadec-overview.png"
            description="Proposed ADADEC, an uncertainty-guided adaptive decoding framework that optimizes code generation by dynamically detecting high-uncertainty steps and triggering lookahead-based reranking."
          />
          
          <Publication 
            title="A Systematic Review of Generated Code and Training Data Quality Issues in Code LLMs: Taxonomy, Causal Mapping, Detection, and Mitigation"
            authors={<>Authors to be finalized</>}
            venue="Under Review, 2026"
            coFirst={true}
            image="/survey-overview.png"
            description="A systematic review linking training data defects to generated code quality in Code LLMs, establishing a multi-dimensional taxonomy and causal mapping framework."
          />

          <Publication 
            title="A Preliminary Study on the Robustness of Code Generation by Large Language Models"
            authors={<>Zike Li, Mingwei Liu, Anji Li, <strong>Kaifeng He</strong>, Yanlin Wang, Xin Peng, Zibin Zheng</>}
            venue="arXiv:2503.20197, 2025"
            link="https://arxiv.org/abs/2503.20197"
            isPreprint={true}
            image="/robgen-overview.png"
            description="Investigated the robustness of code generation, highlighting issues in conditional checks (e.g., null-pointer), and proposed RobGen, a training-free framework for improved robustness."
          />
        </div>

        <h2 id="grants" className="section-divider">Research Grants & Projects</h2>
        <div className="grants-list">
          <Grant 
            title="基于工程规范约束的代码智能体可控生成与质量治理研究"
            program="中山大学大学生创新创业训练项目（国家级）"
            role="主持人 / Project Lead"
            period="2026"
            funding="¥24,000"
          />
          <Grant 
            title="面向代码大模型生成质量问题的训练数据归因与治理技术"
            program="中山大学大学生创新创业训练项目（校级）"
            role="主持人 / Project Lead"
            period="2025"
            funding="¥6,000"
          />
          <Grant 
            title="面向消费级显卡的自适应大模型异构推理系统设计与实现"
            program="中山大学大学生创新创业训练项目（校级）"
            role="成员 / Member"
            period="2026"
            funding="¥6,000"
          />
        </div>
      </div>
    </section>
  );
};

export default Research;
