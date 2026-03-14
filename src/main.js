/**
 * main.js — Entry point: loads JSON data, renders sections, initializes interactions
 */

import '../styles/main.css';
import '../styles/sections.css';
import '../styles/animations.css';
import '../styles/responsive.css';

import {
  renderNav,
  renderHero,
  renderAbout,
  renderSkills,
  renderExperience,
  renderProjects,
  renderEducation,
  renderContact,
  renderFooter,
} from './renderer.js';

import { initScrollReveal, initParallax, initParticles } from './animations.js';
import { initNavigation, initProjectFilter, initSmoothScroll } from './navigation.js';

async function loadJSON(path) {
  const response = await fetch(path);
  return response.json();
}

async function init() {
  // Load all data in parallel
  const [profile, skills, experience, projects, education] = await Promise.all([
    loadJSON('/data/profile.json'),
    loadJSON('/data/skills.json'),
    loadJSON('/data/experience.json'),
    loadJSON('/data/projects.json'),
    loadJSON('/data/education.json'),
  ]);

  // Render all sections
  const app = document.getElementById('app');
  app.innerHTML = [
    renderNav(),
    renderHero(profile),
    renderAbout(profile),
    renderSkills(skills),
    renderExperience(experience),
    renderProjects(projects),
    renderEducation(education),
    renderContact(profile),
    renderFooter(),
  ].join('');

  // Initialize interactions
  initNavigation();
  initProjectFilter();
  initSmoothScroll();
  initScrollReveal();
  initParallax();
  initParticles();
}

init().catch(console.error);
