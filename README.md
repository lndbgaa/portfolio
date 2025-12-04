# Portfolio Moderne - React + TypeScript

Un portfolio moderne et épuré créé avec React, TypeScript, et Vite.

## 🎨 Caractéristiques

- **Design moderne** avec palette sombre (noir et blanc)
- **Couleur d'accentuation** cyan vibrante (#00d9ff)
- **Navigation verticale fixe** à gauche avec logo "LB"
- **4 sections principales** de 100vh chacune :
  - Hero (présentation)
  - À propos
  - Projets (grid de 4 projets)
  - Stack & Outils (technologies et outils)
- **Footer minimaliste**
- **Responsive** (mobile-first)
- **Smooth scroll** CSS natif
- **Aucune animation** (base solide pour futures animations)

## 🛠️ Technologies utilisées

- **React 19.2.0**
- **TypeScript**
- **Vite** (build tool)
- **CSS pur** (pas de framework CSS)
- **React Icons** (icônes pour GitHub, LinkedIn, technologies)

## 📂 Structure du projet

```
src/
├── components/
│   ├── Sidebar.tsx/.css       # Navigation verticale fixe
│   ├── Hero.tsx/.css          # Section d'accueil
│   ├── About.tsx/.css         # Section À propos
│   ├── Projects.tsx/.css      # Section Projets
│   ├── Stack.tsx/.css         # Section Technologies
│   └── Footer.tsx/.css        # Footer
├── App.tsx/.css               # Composant principal
├── index.css                  # Styles globaux
└── main.tsx                   # Point d'entrée
```

## 🚀 Installation et démarrage

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173/` (ou un autre port si celui-ci est occupé)

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 🎯 Sections détaillées

### Navigation (Sidebar)
- Position fixe à gauche
- Logo "LB" en haut
- Points de navigation au centre
- Liens sociaux (GitHub, LinkedIn) + bouton Contact en bas
- Transparente, se fond avec le fond

### Hero
- Nom : "Prénom Nom"
- Titre : "Développeuse Full Stack"
- Localisation : "Saint-Étienne, France"
- Placeholder pour photo de profil (gradient circulaire)
- Design asymétrique

### À propos
- Texte de présentation (lorem ipsum)
- Section hobbies/intérêts
- Placeholder pour photo (gradient avec bordure stylisée)

### Projets
- Grid de 4 cartes de projets
- Chaque carte contient :
  - Image (placeholder avec gradient coloré)
  - Titre
  - Description
  - Boutons GitHub et Demo avec icônes
- Effets hover sur les cartes

### Stack & Outils
- **Stack** : HTML, CSS, JavaScript, TypeScript, React, Node.js, Express.js, MySQL, MongoDB
- **Outils** : Docker, Docker Compose, VS Code, Postman, DataGrip
- Affichage en grid avec icônes
- Cartes élégantes avec effets hover

### Footer
- Design minimaliste
- Copyright "© 2024 LB. Tous droits réservés."
- Liens sociaux répétés

## 🎨 Palette de couleurs

- **Fond principal** : `#0f0f0f` (noir profond)
- **Couleur d'accentuation** : `#00d9ff` (cyan vibrant)
- **Texte principal** : `#ffffff` (blanc)
- **Texte secondaire** : `rgba(255, 255, 255, 0.7-0.8)`
- **Bordures** : `rgba(255, 255, 255, 0.1)`

## 📱 Responsive

Le portfolio est entièrement responsive avec des breakpoints à :
- **Mobile** : < 768px
- **Tablet** : < 1024px
- **Desktop** : > 1024px

Sur mobile, la navigation verticale devient horizontale en haut de l'écran.

## ✨ Prochaines étapes

Ce portfolio est une base solide et épurée sur laquelle vous pouvez ajouter :
- Des animations (Framer Motion)
- Une vraie page Contact
- Vos vrais projets et informations
- Vos vraies photos
- Des interactions plus avancées
- Dark/Light mode toggle (si souhaité)

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. **Remplacer les textes lorem** par vos vraies informations
2. **Modifier les couleurs** dans les fichiers CSS (chercher `#00d9ff` pour la couleur d'accentuation)
3. **Ajouter vos projets** dans `Projects.tsx`
4. **Remplacer les placeholders d'images** par vos vraies photos
5. **Mettre à jour les liens** sociaux dans `Sidebar.tsx` et `Footer.tsx`

## 📄 Licence

© 2024 LB. Tous droits réservés.
