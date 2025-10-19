<!--
Sync Impact Report:
Version change: 0.0.0 -> 0.1.0
Modified principles: None (newly created)
Added sections: All sections are new.
Removed sections: None.
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- .gemini/commands/speckit.tasks.toml: ✅ updated
Follow-up TODOs: None.
-->
# Password Generator Project Constitution

## Core Principles

### I. Security by Design
Security considerations MUST be integrated into every stage of the software development lifecycle, from design to deployment. All code MUST be reviewed for common vulnerabilities, and secure coding practices MUST be followed. Data protection and privacy MUST be prioritized.

### II. Maintainability & Readability
Code MUST be clean, well-structured, and easy to understand. Adherence to established coding standards, clear naming conventions, and appropriate documentation are MANDATORY to facilitate future modifications and reduce technical debt.

### III. Test-Driven Development (TDD)
All new features and bug fixes MUST be developed using a Test-Driven Development approach. Tests MUST be written before implementation, pass only when the feature is complete, and cover critical paths and edge cases. Automated tests are MANDATORY.

### IV. User-Centric Design
All features and design decisions MUST prioritize the end-user experience. Usability, accessibility, and performance MUST be considered from the outset to deliver intuitive and efficient solutions.

### V. Continuous Integration & Deployment (CI/CD)
Automated build, test, and deployment pipelines MUST be established and maintained. Changes MUST be integrated frequently, and the system MUST be deployable at any time, ensuring rapid feedback and delivery.

## Technical Standards & Constraints

Technology Stack: HTML, CSS, JavaScript (vanilla).
Code Quality: Adherence to ESLint (JavaScript), Stylelint (CSS) rules.
Dependencies: Minimal external dependencies; justification required for any new additions.
Performance: Web performance best practices (e.g., optimized assets, efficient DOM manipulation) MUST be followed.

## Development Workflow

Version Control: Git MUST be used for all source code management.
Branching Strategy: Feature branching model with pull requests (PRs) for all changes.
Code Review: All PRs MUST be reviewed and approved by at least one other developer before merging.
Issue Tracking: All work MUST be linked to an issue in the designated issue tracking system.

## Governance

This Constitution supersedes all other project practices and guidelines.
Amendments to this Constitution require a formal proposal, team discussion, and consensus approval. All amendments MUST be documented, including the rationale for the change and any necessary migration plans.
Compliance with this Constitution MUST be verified during code reviews and automated checks.
Any deviation from these principles MUST be explicitly justified and approved by the project lead.

**Version**: 0.1.0 | **Ratified**: 2025-10-19 | **Last Amended**: 2025-10-19