import React, { useId, useState } from 'react';
import arxivIcon from '../assets/arxiv.svg';
import githubIcon from '../assets/github.svg';
import huggingfaceIcon from '../assets/huggingface.svg';
import './Research.css';

function lineIcon(path: string) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>;
}

const badgeIcons = {
  arXiv: <img src={arxivIcon} alt="" />,
  'FSE 2026': lineIcon('M3 9l9-6 9 6z M5 12v6 M10 12v6 M14 12v6 M19 12v6 M3 21h18'),
  GitHub: <img src={githubIcon} alt="" />,
  'Project page': lineIcon('M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0z M2 12h20 M12 2c-5 5-5 15 0 20 5-5 5-15 0-20z'),
  Dataset: <img src={huggingfaceIcon} alt="" />,
  Leaderboard: <img src={huggingfaceIcon} alt="" />,
  Code: lineIcon('M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16'),
};

type Resource = { label: keyof typeof badgeIcons; href: string };

interface PublicationProps {
  title: string;
  authors: React.ReactNode;
  venue?: string;
  link: string;
  resources: Resource[];
  description: string;
  image?: string;
  coFirst?: boolean;
}

const Publication: React.FC<PublicationProps> = ({ title, authors, venue, link, resources, description, image, coFirst }) => (
  <div className="pub-item">
    <div className="pub-content-wrapper">
      <div className="pub-info">
        <h3 className="pub-title">
          {title}
          {coFirst && <span className="co-first-tag">Co-first author</span>}
        </h3>
        <div className="pub-authors">{authors}</div>
        {venue && <div className="pub-venue">{venue}</div>}
        <p className="pub-description">{description}</p>
        <div className="pub-resources">
          {([{ label: 'arXiv', href: link }, ...resources] satisfies Resource[]).map(({ label, href }) => (
            <a key={label} className="pub-badge" data-resource={label} href={href}
              target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${title}`}>
              {badgeIcons[label]}
              {label}
            </a>
          ))}
        </div>
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
            resources={[
              { label: 'FSE 2026', href: 'https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/71/AdaDec-A-Uncertainty-Guided-Lookahead-Decoding-Framework-for-LLM-based-Code-Generati' },
              { label: 'GitHub', href: 'https://github.com/SYSUSELab/AdaDec' },
            ]}
            image="/adadec-overview.png"
            description="Proposed AdaDec, an uncertainty-guided adaptive decoding framework that optimizes code generation by dynamically detecting high-uncertainty steps and triggering lookahead-based reranking."
          />
          
          <Publication 
            title="Bridging Generation and Training: A Systematic Review of Quality Issues in LLMs for Code"
            authors={<><strong>Kaifeng He*</strong>, Xiaojun Zhang*, Peiliang Cai*, Mingwei Liu, Yanlin Wang, Chong Wang, Kaifeng Huang, Bihuan Chen, Xin Peng, Zibin Zheng</>}
            venue="ACM Transactions on Software Engineering and Methodology (TOSEM) · Under review"
            link="https://arxiv.org/abs/2605.05267"
            resources={[
              { label: 'GitHub', href: 'https://github.com/SYSUSELab/From-Data-to-Code' },
              { label: 'Project page', href: 'https://sysuselab.github.io/From-Data-to-Code/' },
            ]}
            // coFirst={true}
            image="/survey-overview.png"
            description="A systematic review linking training data defects to generated code quality in Code LLMs, establishing a multi-dimensional taxonomy and causal mapping framework."
          />

          <Publication
            title="RepoNorm: Acquiring and Verifying Repository Norms for Coding Agents"
            authors={<><strong>Kaifeng He</strong>, Xiaojun Zhang, Zhenxi Chen, Christoph Treude, Mingwei Liu</>}
            venue="ACM International Conference on the Foundations of Software Engineering (FSE), 2027 · Under review"
            link="https://arxiv.org/abs/2610.07757"
            resources={[
              { label: 'GitHub', href: 'https://github.com/SYSUSELab/RepoNorm' },
              { label: 'Dataset', href: 'https://huggingface.co/datasets/SYSUSELab/RepoNormBench' },
              { label: 'Leaderboard', href: 'https://huggingface.co/spaces/SYSUSELab/RepoNormBench-Leaderboard' },
            ]}
            image="/reponorm-overview.png"
            description="Developed RepoNorm to acquire explicit repository norms and implicit code conventions, verify them against repository evidence and Git history, and deliver structured norm packages that improve coding agents' norm compliance."
          />

          <Publication 
            title="A Preliminary Study on the Robustness of Code Generation by Large Language Models"
            authors={<>Zike Li, Mingwei Liu, Anji Li, <strong>Kaifeng He</strong>, Yanlin Wang, Xin Peng, Zibin Zheng</>}
            venue="arXiv:2503.20197, 2025"
            link="https://arxiv.org/abs/2503.20197"
            resources={[
              { label: 'Code', href: 'https://anonymous.4open.science/r/RobGen-838C/README.md' },
            ]}
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
            funding="¥20,000"
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
