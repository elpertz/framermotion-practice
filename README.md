# 🎭 Framer Motion Practice

A comprehensive React project showcasing Framer Motion animations with reusable components and interactive examples.

## 🚀 Live Demo

[View the live demo here](#) - Coming soon!

## 📁 Project Structure

```
src/
├── components/
│   ├── motion/           # Basic motion components
│   │   ├── FadeIn.tsx   # Fade in animations
│   │   ├── ScaleIn.tsx  # Scale in animations
│   │   ├── Step.tsx     # Individual step component
│   │   └── index.ts     # Exports all motion components
│   ├── motion-class/     # Complex motion components
│   │   ├── StepperMotion.tsx  # Multi-step progress indicator
│   │   └── index.ts     # Exports motion-class components
│   └── ui/              # UI components
│       └── button.tsx   # Reusable button component
├── hooks/
│   └── useTheme.ts      # Theme management hook
├── lib/
│   └── utils.ts         # Utility functions
└── App.tsx              # Main application with examples
```

## 🎯 How to Navigate the Project

### 1. **Start with `App.tsx`**

This is your main entry point where you can see all components in action:

```tsx
// Two main sections:
// 1. Stepper Example (lines 10-14)
<StepperMotion totalSteps={5} />

// 2. Animation Showcase (lines 16-100)
// - FadeIn animations
// - ScaleIn animations
// - Interactive buttons
// - Theme toggle
```

### 2. **Explore Motion Components**

Navigate to `src/components/motion/` to see basic animation components:

- **`FadeIn.tsx`** - Simple fade in animations
- **`ScaleIn.tsx`** - Scale in animations with spring physics
- **`Step.tsx`** - Individual step with state animations

### 3. **Check Complex Components**

Go to `src/components/motion-class/` for more complex animations:

- **`StepperMotion.tsx`** - Multi-step progress indicator with navigation

### 4. **Understand the Animation Logic**

Each component has detailed JSDoc comments explaining:

- What the component does
- What props it accepts
- How animations work

## 🎨 Available Components

### Basic Motion Components (`/motion/`)

#### `FadeIn`

```tsx
import { FadeIn } from "./components/motion";

<FadeIn delay={0.2} direction="up">
  <h1>Hello World</h1>
</FadeIn>;
```

**Props:**

- `delay` - Animation delay in seconds
- `direction` - "up", "down", "left", "right"
- `children` - Content to animate

#### `ScaleIn`

```tsx
import { ScaleIn } from "./components/motion";

<ScaleIn delay={0.6} type="spring" scale={0.5}>
  <Button>Click me!</Button>
</ScaleIn>;
```

**Props:**

- `delay` - Animation delay in seconds
- `type` - "spring" or "tween"
- `scale` - Initial scale value
- `children` - Content to animate

#### `Step`

```tsx
import { Step } from "./components/motion";

<Step step={1} currentStep={2} />;
```

**Props:**

- `step` - Step number to display
- `currentStep` - Current active step

### Complex Motion Components (`/motion-class/`)

#### `StepperMotion`

```tsx
import { StepperMotion } from "./components/motion-class";

<StepperMotion totalSteps={5} />;
```

**Props:**

- `totalSteps` - Number of steps (default: 4)

## 🎭 Animation Examples

### 1. **Stepper Animation**

- **Location:** First section in `App.tsx`
- **What it does:** Shows a multi-step progress indicator
- **Features:**
  - Animated step transitions
  - Checkmark animations
  - Navigation controls
  - State management

### 2. **Fade In Showcase**

- **Location:** Second section in `App.tsx`
- **What it does:** Demonstrates fade in animations
- **Features:**
  - Staggered animations
  - Different directions
  - Text and button animations

### 3. **Scale In Examples**

- **Location:** Second section in `App.tsx`
- **What it does:** Shows scale animations with different physics
- **Features:**
  - Spring animations
  - Hover effects
  - Interactive elements

### 4. **Theme Toggle**

- **Location:** Bottom of second section
- **What it does:** Demonstrates theme switching
- **Features:**
  - Light/Dark/System themes
  - Smooth transitions
  - Persistent state

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/elpertz/framermotion-practice.git
cd framermotion-practice

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

## 🎯 Key Learning Points

### 1. **Animation States**

Each component manages different animation states:

- `inactive` - Initial state
- `active` - Current state
- `completed` - Finished state

### 2. **Framer Motion Concepts**

- **Variants** - Predefined animation states
- **Transitions** - Animation timing and easing
- **Spring Physics** - Natural motion
- **Hover/Tap** - Interactive animations

### 3. **Component Architecture**

- **Separation of concerns** - Each component has a single responsibility
- **Reusability** - Components accept props for customization
- **Composition** - Complex components built from simple ones

### 4. **State Management**

- **Local state** - Component-specific state
- **Theme context** - Global theme state
- **Animation state** - Framer Motion internal state

## 🔧 Customization

### Adding New Animations

1. Create a new component in `/motion/`
2. Define animation variants
3. Export from `index.ts`
4. Use in your app

### Modifying Existing Components

1. Locate the component file
2. Modify the variants or props
3. Test the changes
4. Update documentation

### Theme Customization

1. Edit `src/hooks/useTheme.ts`
2. Add new theme variables
3. Update CSS variables
4. Test across components

## 📚 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Happy animating! 🎭✨**
