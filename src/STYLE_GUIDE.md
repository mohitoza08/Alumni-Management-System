# Alumni Connect Platform - Style Guide

## 🎨 Visual Identity

### Brand Mission
Alumni Connect is a professional yet friendly platform that brings together students, alumni, and faculty to build meaningful connections, advance careers, and strengthen our community.

### Brand Personality
- **Professional**: Trustworthy and credible
- **Friendly**: Warm and welcoming
- **Modern**: Contemporary and innovative
- **Community-Focused**: Collaborative and supportive
- **Inspiring**: Motivational and aspirational

---

## 🎨 Color System

### Primary Colors

#### Royal Tech Blue - #1E73BE
- **Usage**: Primary actions, links, highlights
- **Hover**: #155A9C
- **RGB**: rgb(30, 115, 190)
- **Purpose**: Trust, professionalism, stability

#### Soft Vibrant Purple - #6F57FF
- **Usage**: Secondary actions, accents, gradients
- **Hover**: #5940CC
- **RGB**: rgb(111, 87, 255)
- **Purpose**: Innovation, creativity, premium

### Accent Colors

#### Teal Cyan - #36CFC9
- **Usage**: Success states, positive actions, highlights
- **RGB**: rgb(54, 207, 201)
- **Purpose**: Growth, freshness, positivity

#### Warm Orange - #FF8C42
- **Usage**: Calls-to-action, featured items, badges
- **RGB**: rgb(255, 140, 66)
- **Purpose**: Energy, enthusiasm, warmth

### Semantic Colors

#### Success Green - #52C41A
- **Usage**: Success messages, completed states
- **Purpose**: Confirmation, achievement

#### Warning Yellow - #FAAD14
- **Usage**: Warning messages, caution states
- **Purpose**: Attention, caution

#### Error Red - #F5222D
- **Usage**: Error messages, destructive actions
- **Purpose**: Alert, danger

### Neutral Colors

#### Text Colors
- **Primary Text**: #333333 (Dark Gray)
- **Secondary Text**: #555555 (Medium Gray)
- **Tertiary Text**: #777777 (Light Gray)
- **Disabled Text**: #999999 (Very Light Gray)

#### Background Colors
- **Primary Background**: #FFFFFF (White)
- **Secondary Background**: #F5F5F7 (Light Gray)
- **Border Color**: #E0E0E0 (Border Gray)

### Gradients

#### Primary Gradient
```css
background: linear-gradient(135deg, #1E73BE 0%, #6F57FF 100%);
```

#### Accent Gradient
```css
background: linear-gradient(135deg, #36CFC9 0%, #1E73BE 100%);
```

#### Warm Gradient
```css
background: linear-gradient(135deg, #FF8C42 0%, #E67830 100%);
```

---

## 📝 Typography

### Font Families

#### Headings
- **Primary**: 'Poppins', sans-serif
- **Alternative**: 'Montserrat', sans-serif
- **Weights**: 500 (Medium), 600 (Semi-bold), 700 (Bold)

#### Body Text
- **Primary**: 'Inter', sans-serif
- **Alternative**: 'Open Sans', sans-serif
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold)

### Type Scale

#### Desktop
- **H1**: 48px / Line Height 1.3 / Weight 700
- **H2**: 36px / Line Height 1.3 / Weight 600
- **H3**: 28px / Line Height 1.3 / Weight 600
- **H4**: 24px / Line Height 1.4 / Weight 500
- **H5**: 20px / Line Height 1.4 / Weight 500
- **H6**: 18px / Line Height 1.5 / Weight 500
- **Body Large**: 18px / Line Height 1.6 / Weight 400
- **Body Regular**: 16px / Line Height 1.6 / Weight 400
- **Body Small**: 14px / Line Height 1.5 / Weight 400
- **Caption**: 12px / Line Height 1.5 / Weight 400

#### Mobile
- **H1**: 36px
- **H2**: 28px
- **H3**: 24px
- **H4**: 20px
- (Other sizes remain the same)

### Text Styles

#### Paragraph Spacing
- Between paragraphs: 16px
- Within sections: 24px

#### Link Styles
- Color: #1E73BE
- Hover: Underline
- Visited: Same as default
- Active: #155A9C

---

## 📐 Spacing System

### Base Unit: 8px

All spacing follows the 8px grid system for consistency:

- **xs**: 8px (0.5rem)
- **sm**: 16px (1rem)
- **md**: 24px (1.5rem)
- **lg**: 32px (2rem)
- **xl**: 40px (2.5rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)

### Component Spacing

#### Cards
- Padding: 24px (md)
- Margin Bottom: 24px (md)
- Gap Between Cards: 24px (md)

#### Buttons
- Padding: 12px 24px (vertical, horizontal)
- Gap Between Buttons: 16px (sm)

#### Forms
- Label Margin Bottom: 8px (xs)
- Input Margin Bottom: 24px (md)
- Field Gap: 16px (sm)

---

## 🔲 Layout Grid

### Desktop (1024px+)
- **Columns**: 12
- **Gutter**: 24px
- **Margin**: 48px (sides)
- **Max Width**: 1440px

### Tablet (768px - 1023px)
- **Columns**: 8
- **Gutter**: 16px
- **Margin**: 32px (sides)

### Mobile (320px - 767px)
- **Columns**: 4
- **Gutter**: 16px
- **Margin**: 16px (sides)

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* Small */ }
@media (min-width: 768px) { /* Medium */ }
@media (min-width: 1024px) { /* Large */ }
@media (min-width: 1280px) { /* XL */ }
@media (min-width: 1536px) { /* 2XL */ }
```

---

## 🎭 Components

### Border Radius

#### Cards
- Default: 12px
- Large: 16px
- Extra Large: 20px

#### Buttons
- Default: 10px
- Pills: 999px (fully rounded)

#### Inputs
- Default: 10px

#### Avatars
- Circle: 50% (fully rounded)
- Rounded: 8px

#### Badges
- Default: 999px (fully rounded)

### Shadows

#### Elevation Levels
```css
/* Level 1 - Subtle */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

/* Level 2 - Default */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

/* Level 3 - Elevated */
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

/* Level 4 - Hover */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* Level 5 - Modal */
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16);
```

### Transitions

#### Duration
- **Fast**: 150ms
- **Default**: 200ms
- **Slow**: 300ms

#### Easing
- **Default**: cubic-bezier(0.4, 0, 0.2, 1)
- **Ease In**: cubic-bezier(0.4, 0, 1, 1)
- **Ease Out**: cubic-bezier(0, 0, 0.2, 1)

#### Usage
```css
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🔘 Buttons

### Variants

#### Primary
- Background: #1E73BE
- Text: #FFFFFF
- Hover: #155A9C
- Shadow: Level 1

#### Secondary
- Background: #6F57FF
- Text: #FFFFFF
- Hover: #5940CC
- Shadow: Level 1

#### Outline
- Background: Transparent
- Border: 2px solid #1E73BE
- Text: #1E73BE
- Hover: Background #1E73BE, Text #FFFFFF

#### Ghost
- Background: Transparent
- Text: #1E73BE
- Hover: Background #F5F5F7

### Sizes
- **Small**: padding 8px 16px, font-size 14px
- **Medium**: padding 12px 24px, font-size 16px
- **Large**: padding 16px 32px, font-size 18px

### States
- **Default**: Normal appearance
- **Hover**: Darker background, elevated shadow
- **Active**: Even darker, pressed down
- **Disabled**: 50% opacity, no hover effects
- **Loading**: Spinner, disabled state

---

## 📋 Forms

### Input Fields

#### Default State
- Border: 1px solid #E0E0E0
- Background: #FFFFFF
- Text: #333333
- Padding: 12px 16px

#### Focus State
- Border: 2px solid #1E73BE
- Ring: 2px #1E73BE at 20% opacity
- Background: #FFFFFF

#### Error State
- Border: 2px solid #F5222D
- Text Color: #F5222D
- Error Message: 12px, #F5222D

#### Disabled State
- Background: #F5F5F7
- Text: #999999
- Cursor: not-allowed

### Labels
- Font Size: 14px
- Color: #333333
- Margin Bottom: 8px
- Required Indicator: * in #F5222D

---

## 🏷️ Badges

### Types

#### Verified
- Background: #36CFC9 at 20% opacity
- Text: #36CFC9
- Icon: CheckCircle

#### Mentor
- Background: #6F57FF at 20% opacity
- Text: #6F57FF
- Icon: Award

#### Top Alumni
- Background: #FF8C42 at 20% opacity
- Text: #FF8C42
- Icon: Star

#### Active
- Background: #52C41A at 20% opacity
- Text: #52C41A
- Icon: Zap

### Sizes
- **Small**: padding 4px 8px, font-size 12px, icon 12px
- **Medium**: padding 6px 12px, font-size 14px, icon 16px
- **Large**: padding 8px 16px, font-size 16px, icon 20px

---

## 👤 Avatars

### Sizes
- **XS**: 24px × 24px
- **SM**: 32px × 32px
- **MD**: 48px × 48px
- **LG**: 64px × 64px
- **XL**: 96px × 96px

### Status Indicators
- **Online**: #52C41A
- **Away**: #FAAD14
- **Busy**: #F5222D
- **Offline**: #999999

Position: Bottom right corner
Size: 25% of avatar size

---

## 📊 Data Visualization

### Chart Colors
1. #1E73BE (Primary)
2. #6F57FF (Secondary)
3. #36CFC9 (Accent)
4. #FF8C42 (Accent Alt)
5. #52C41A (Success)
6. #FAAD14 (Warning)

### Progress Bars
- Height: 8px (default)
- Background: #F5F5F7
- Fill: #1E73BE (or custom)
- Border Radius: 999px (fully rounded)
- Animation: Smooth transition 300ms

---

## 🖼️ Images

### Aspect Ratios
- **Profile Avatar**: 1:1
- **Cover Photo**: 16:9
- **Event Card**: 2:1
- **Story Card**: 3:2
- **Banner**: 21:9

### Optimization
- Format: WebP with fallback
- Max Width: 1920px
- Quality: 80%
- Lazy Loading: Enabled

---

## ♿ Accessibility

### Contrast Ratios
- **Normal Text**: Minimum 4.5:1
- **Large Text**: Minimum 3:1
- **UI Components**: Minimum 3:1

### Focus Indicators
- Outline: 2px solid #1E73BE
- Offset: 2px
- Visible on keyboard navigation

### Interactive Elements
- Minimum size: 44px × 44px
- Clear hover states
- Descriptive labels
- ARIA attributes

---

## 📱 Mobile Considerations

### Touch Targets
- Minimum: 44px × 44px
- Recommended: 48px × 48px
- Spacing between: 8px

### Text Sizes
- Minimum: 16px (to prevent zoom on iOS)
- Recommended body: 16-18px
- Small text: 14px minimum

### Gestures
- Swipe: Horizontal navigation
- Tap: Primary action
- Long Press: Secondary action
- Pull: Refresh content

---

## 🎯 Icon System

### Library
Lucide React icons for consistency

### Sizes
- **Small**: 16px
- **Medium**: 20px
- **Large**: 24px
- **XL**: 32px

### Usage
- Always use consistent sizing
- Pair with text when possible
- Use semantic meaning
- Maintain proper spacing

---

## 📐 Component States

### Interactive States
1. **Default**: Base appearance
2. **Hover**: Visual feedback on cursor over
3. **Active**: Visual feedback on click
4. **Focus**: Keyboard navigation indicator
5. **Disabled**: Non-interactive state
6. **Loading**: Processing state
7. **Error**: Invalid state
8. **Success**: Completed state

### Animation Guidelines
- Use subtle transitions
- Duration: 150-300ms
- Easing: Smooth curves
- Avoid jarring movements
- Maintain performance

---

## 💡 Best Practices

### Do's ✅
- Use the 8px spacing system
- Maintain consistent typography
- Follow color guidelines
- Use semantic colors
- Provide clear feedback
- Test on multiple devices
- Ensure accessibility
- Optimize images
- Use icons consistently
- Maintain hierarchy

### Don'ts ❌
- Don't mix font families
- Don't use random spacing
- Don't ignore hover states
- Don't forget mobile users
- Don't skip accessibility
- Don't use low contrast
- Don't over-animate
- Don't ignore loading states
- Don't forget error handling
- Don't use unclear icons

---

## 📚 Resources

### Design Tools
- Figma (primary design tool)
- Adobe Illustrator (for logos)
- Photoshop (for image editing)

### Development Tools
- React (UI framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Lucide React (icons)

### Testing Tools
- Chrome DevTools
- React DevTools
- Lighthouse (performance)
- WAVE (accessibility)

---

**Version**: 1.0.0
**Last Updated**: December 2024
**Maintained by**: Alumni Connect Design Team

This style guide ensures consistency across the entire Alumni Connect Platform. 🎨
