import React, { useId, useState } from 'react';
import './Research.css';

interface PublicationProps {
  title: string;
  authors: React.ReactNode;
  venue?: string;
  link?: string;
  projectLink?: string;
  description: string;
  isPreprint?: boolean;
  image?: string;
  coFirst?: boolean;
}

const Publication: React.FC<PublicationProps> = ({ title, authors, venue, link, projectLink, description, isPreprint, image, coFirst }) => (
  <div className="pub-item">
    <div className="pub-content-wrapper">
      <div className="pub-info">
        <h3 className="pub-title">
          {link ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}
          {isPreprint && <span className="preprint-tag">Preprint</span>}
          {coFirst && <span className="co-first-tag">Co-first author</span>}
        </h3>
        <div className="pub-authors">{authors}</div>
        {venue && <div className="pub-venue">{venue}</div>}
        <p className="pub-description">{description}</p>
        {projectLink && (
          <a className="pub-project-link" href={projectLink} target="_blank" rel="noopener noreferrer">Project website</a>
        )}
      </div>
      {image && (
        <div className="pub-image">
          <img src={image} alt={`${title} overview`} loading="lazy" />
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
  description?: string;
}

const Grant: React.FC<GrantProps> = ({ title, role, period, funding, program, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionId = useId();

  return (
    <article className={`grant-item ${isExpanded ? 'expanded' : ''}`}>
      {program && <div className="grant-program">{program}</div>}
      <button
        className="grant-toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={description ? descriptionId : undefined}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="grant-header">
          <span className="grant-title">
            {title}
            <span className={`expand-icon ${isExpanded ? 'up' : 'down'}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </span>
          <span className="grant-funding">{funding}</span>
        </span>
      </button>
      <div className="grant-meta">
        <span className="grant-role">{role}</span>
        <span className="grant-period">{period}</span>
      </div>
      {description && (
        <div id={descriptionId} className={`grant-description ${isExpanded ? 'show' : ''}`}>
          <p>{description}</p>
        </div>
      )}
    </article>
  );
};

const Research: React.FC = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2>Selected Publications</h2>
        <div className="publications-list">
          <Publication 
            title="AdaDec: An Uncertainty-Guided Lookahead Decoding Framework for LLM-based Code Generation"
            authors={<><strong>Kaifeng He</strong>, Mingwei Liu, Chong Wang, Zike Li, Yanlin Wang, Xin Peng, Zibin Zheng</>}
            venue="ACM International Conference on the Foundations of Software Engineering (FSE), 2026 · Accepted"
            link="https://arxiv.org/abs/2506.08980"
            image="/adadec-overview.png"
            description="Proposed AdaDec, an uncertainty-guided adaptive decoding framework that optimizes code generation by dynamically detecting high-uncertainty steps and triggering lookahead-based reranking."
          />
          
          <Publication 
            title="Bridging Generation and Training: A Systematic Review of Quality Issues in LLMs for Code"
            authors={<><strong>Kaifeng He*</strong>, Xiaojun Zhang*, Peiliang Cai*, Mingwei Liu, Yanlin Wang, Chong Wang, Kaifeng Huang, Bihuan Chen, Xin Peng, Zibin Zheng</>}
            venue="ACM Transactions on Software Engineering and Methodology (TOSEM) · Under review"
            link="https://arxiv.org/abs/2605.05267"
            projectLink="https://sysuselab.github.io/From-Data-to-Code"
            // coFirst={true}
            image="/survey-overview.png"
            description="A systematic review linking training data defects to generated code quality in Code LLMs, establishing a multi-dimensional taxonomy and causal mapping framework."
          />

          <Publication
            title="RepoNorm: Acquiring and Verifying Repository Norms for Coding Agents"
            authors={<><strong>Kaifeng He</strong>, Xiaojun Zhang, Zhenxi Chen, Christoph Treude, Mingwei Liu</>}
            venue="ACM International Conference on the Foundations of Software Engineering (FSE), 2027 · Under review"
            link="https://arxiv.org/abs/2610.07757"
            image="/reponorm-overview.png"
            description="Developed RepoNorm to acquire explicit repository norms and implicit code conventions, verify them against repository evidence and Git history, and deliver structured norm packages that improve coding agents' norm compliance."
          />

          <Publication 
            title="Enhancing the Robustness of LLM-Generated Code: Empirical Study and Framework"
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
            title="Research on Controllable Generation and Quality Governance of Code Agents under Engineering Specification Constraints"
            program="China National-Level Innovation Project"
            role="Project Leader"
            period="2026–2027"
            funding="¥24,000"
            description="This project focuses on 'Engineering Specification-Driven Code Generation and Quality Governance,' aiming to build a mechanism that actively guarantees code architectural quality. Key research includes: 1) Constructing structured knowledge bases for engineering specs to bridge natural language and machine-parsable rules. 2) Developing collaborative control techniques using RAG and decoding intervention to block non-compliant code during inference. 3) Establishing adaptive evolution mechanisms for agents to perceive different engineering environments and repair non-standard modules."
          />
          <Grant 
            title="Training Data Attribution and Governance Techniques for Code Generation Quality Issues in LLMs"
            program="China University-Level Innovation Project"
            role="Project Leader"
            period="2025–2026"
            funding="¥6,000"
            description="This project investigates the link between training data defects (e.g., duplicated samples, deprecated APIs) and code generation issues like hallucinations. We aim to trace generation errors back to training data, automatically identifying quality problems to provide an interpretable, white-box method for enhancing the safety, trustworthiness, and reliability of code LLMs."
          />
          <Grant 
            title="Design and Implementation of an Adaptive Large Model Heterogeneous Inference System for Consumer GPUs"
            program="China University-Level Innovation Project"
            role="Member"
            period="2026–2027"
            funding="¥6,000"
            description="This project aims to address the 'memory wall' and high latency of LLM deployment on consumer hardware by designing an adaptive GPU-CPU heterogeneous inference system. Based on the 'Online Neuron Balancing' architecture, it utilizes sparse activation and temporal caching to dynamically schedule high-value neurons to the GPU, aiming to achieve deep overlap between computation and I/O. The project also explores extending this framework to Mixture-of-Experts (MoE) architectures."
          />
        </div>
      </div>
    </section>
  );
};

export default Research;
