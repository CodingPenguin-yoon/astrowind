import { portfolioProfile, selectedProjects } from './data/portfolio';
import { getPermalink } from './utils/permalinks';

const sectionHref = (section: string) => getPermalink(`/#${section}`);

const socialLinks = [
  { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: portfolioProfile.socials.github },
  { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: portfolioProfile.socials.linkedin },
  { ariaLabel: 'Blog', icon: 'tabler:article', href: portfolioProfile.socials.blog },
].filter(({ href }) => href);

export const headerData = {
  links: [
    { text: '소개', href: sectionHref('about') },
    { text: '대표 프로젝트', href: sectionHref('projects') },
    { text: '핵심 역량', href: sectionHref('focus') },
    { text: '설계 원칙', href: sectionHref('experience') },
    { text: '연락하기', href: sectionHref('contact') },
  ],
  actions: [{ text: '연락하기', href: sectionHref('contact') }],
};

export const footerData = {
  links: [
    {
      title: '탐색',
      links: [
        { text: '소개', href: sectionHref('about') },
        { text: '대표 프로젝트', href: sectionHref('projects') },
        { text: '핵심 역량', href: sectionHref('focus') },
        { text: '설계 원칙', href: sectionHref('experience') },
        { text: '연락하기', href: sectionHref('contact') },
      ],
    },
    {
      title: '대표 프로젝트',
      links: selectedProjects.map(({ title }) => ({ text: title, href: sectionHref('projects') })),
    },
    {
      title: '링크',
      links: socialLinks.map(({ ariaLabel, href }) => ({ text: ariaLabel, href })),
    },
  ],
  secondaryLinks: [
    { text: '소개', href: sectionHref('about') },
    { text: '프로젝트', href: sectionHref('projects') },
    { text: '연락하기', href: sectionHref('contact') },
  ],
  socialLinks,
  footNote: `${portfolioProfile.name} <span class="font-mono text-slate-500">(${portfolioProfile.nameEn})</span> · ${portfolioProfile.role}`,
};
