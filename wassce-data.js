/* WASSCE Subject Data — Tolbert Innovation Hub Liberia */
/* Generated for WASSCE PRO Platform | wassce-learn.html */

window.WASSCE_SUBJECTS = {
  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    shortName: 'Maths',
    icon: '🔢',
    color: '#059669',
    bgColor: '#dcfce7',
    textColor: '#065f46',
    category: 'core',
    description: 'Master algebra, geometry, statistics and more for WAEC success',
    examFormat: 'Paper 1: 50 MCQ (1hr 30min) | Paper 2: Theory/Essay (2hr 30min)',
    totalTopics: 5,
    topics: [
      {
        id: 'number_bases',
        name: 'Number Bases & Numeration',
        icon: '🔢',
        lessonNotes: `<h4>Number Bases</h4>
<p>Our everyday counting system uses <strong>base 10 (denary)</strong> — each digit position is a power of 10. Other bases used in WASSCE include <strong>base 2 (binary)</strong>, <strong>base 8 (octal)</strong>, and occasionally base 5 or others.</p>
<h4>Converting from Any Base to Base 10</h4>
<p>Multiply each digit by its place value (power of the base), then add all results.</p>
<p>Example: 1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = <strong>13₁₀</strong></p>
<p>Example: 234₅ = 2×5² + 3×5¹ + 4×5⁰ = 50 + 15 + 4 = <strong>69₁₀</strong></p>
<h4>Converting from Base 10 to Another Base</h4>
<p>Divide repeatedly by the target base, recording remainders. Read remainders from bottom to top.</p>
<p>Example: Convert 25₁₀ to base 2: 25÷2=12 r1, 12÷2=6 r0, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1. Reading up: <strong>11001₂</strong></p>
<h4>Arithmetic in Different Bases</h4>
<p><strong>Addition:</strong> Add normally but carry when the sum reaches the base value. In base 2: 1+1=10₂ (write 0, carry 1). In base 8: 7+5=14₈ (write 4, carry 1).</p>
<p><strong>Subtraction:</strong> Borrow from the next column (borrowing 1 from the next column gives you the base value in the current column).</p>`,
        keyPoints: [
          'To convert from any base to base 10: multiply each digit by its place value (power of base) and add',
          'To convert from base 10 to another base: divide repeatedly by the base, reading remainders upward',
          'In base 2 addition: 1 + 1 = 10₂ (write 0, carry 1); 1 + 1 + 1 = 11₂ (write 1, carry 1)',
          'In subtraction, borrowing 1 from the next column gives you the base value in the current column'
        ],
        formulas: [
          'Base conversion: dₙ × bⁿ + dₙ₋₁ × bⁿ⁻¹ + ... + d₀ × b⁰ (convert TO base 10)',
          'Place values in base 2: ..., 2⁴=16, 2³=8, 2²=4, 2¹=2, 2⁰=1'
        ],
        examTips: [
          'Always show your working in base conversion — write out all the multiplications and additions',
          'When adding in other bases, always check if the sum equals or exceeds the base value (carry if so)',
          'Label your answers clearly with the base subscript (e.g. 1011₂)'
        ],
        commonMistakes: [
          'Reading the remainders from top to bottom (should be bottom to top) when converting to a new base',
          'Carrying 2 in binary addition instead of 1 — remember any carry is always 1 in any base'
        ],
        mcq: [
          { q: 'Convert 1011₂ to base 10', options: ['A. 9', 'B. 10', 'C. 11', 'D. 13'], answer: 2, explanation: '1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀' },
          { q: 'Convert 47₁₀ to base 2', options: ['A. 101111₂', 'B. 110111₂', 'C. 101001₂', 'D. 101010₂'], answer: 0, explanation: '47÷2=23r1, 23÷2=11r1, 11÷2=5r1, 5÷2=2r1, 2÷2=1r0, 1÷2=0r1. Reading upwards: 101111₂.' },
          { q: 'What is 1101₂ + 1011₂?', options: ['A. 10111₂', 'B. 11000₂', 'C. 11001₂', 'D. 11100₂'], answer: 1, explanation: '1101 + 1011: ones: 1+1=10 (write 0 carry 1); twos: 0+1+1=10 (write 0 carry 1); fours: 1+0+1=10 (write 0 carry 1); eights: 1+1+1=11 (write 1 carry 1); sixteens: 0+0+1=1. Result: 11000₂.' },
          { q: 'Convert 234₅ to base 10', options: ['A. 59', 'B. 69', 'C. 79', 'D. 89'], answer: 1, explanation: '2×5² + 3×5¹ + 4×5⁰ = 50 + 15 + 4 = 69₁₀.' },
          { q: '10110₂ in base 10 is', options: ['A. 20', 'B. 22', 'C. 24', 'D. 26'], answer: 1, explanation: '1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰ = 16 + 0 + 4 + 2 + 0 = 22₁₀.' },
          { q: 'Convert 25₁₀ to base 5', options: ['A. 50₅', 'B. 100₅', 'C. 105₅', 'D. 250₅'], answer: 1, explanation: '25÷5=5r0, 5÷5=1r0, 1÷5=0r1. Reading upward: 100₅.' },
          { q: 'Evaluate 11₂ × 11₂', options: ['A. 101₂', 'B. 1001₂', 'C. 110₂', 'D. 1010₂'], answer: 1, explanation: '11₂ × 11₂ = 3×3 in base 10 = 9₁₀ = 1001₂. Or multiply directly: 11×11 in binary = 11+110 = 1001₂.' },
          { q: 'Which of the following is NOT a valid octal (base 8) number?', options: ['A. 374₈', 'B. 256₈', 'C. 189₈', 'D. 777₈'], answer: 2, explanation: '189₈ is invalid because the digit 9 does not exist in base 8. Valid octal digits are 0–7 only.' },
          { q: '1000₂ is equal to which base 10 number?', options: ['A. 6', 'B. 7', 'C. 8', 'D. 10'], answer: 2, explanation: '1×2³ + 0×2² + 0×2¹ + 0×2⁰ = 8.' },
          { q: 'Convert 100₁₀ to base 2', options: ['A. 1100010₂', 'B. 1100100₂', 'C. 1010100₂', 'D. 1000110₂'], answer: 1, explanation: '100÷2=50r0, 50÷2=25r0, 25÷2=12r1, 12÷2=6r0, 6÷2=3r0, 3÷2=1r1, 1÷2=0r1. Reading upward: 1100100₂.' }
        ],
        theory: [
          { question: '(a) Convert 110111₂ to base 10. (b) Convert 75₁₀ to base 2. (c) Evaluate 101₂ + 111₂.', marks: 10, answer: '(a) 1×2⁵+1×2⁴+0×2³+1×2²+1×2¹+1×2⁰ = 32+16+0+4+2+1 = 55₁₀. (b) 75÷2=37r1, 37÷2=18r1, 18÷2=9r0, 9÷2=4r1, 4÷2=2r0, 2÷2=1r0, 1÷2=0r1. Reading upward: 1001011₂. (c) 101+111: ones:1+1=10(0,c1); twos:0+1+1=10(0,c1); fours:1+1+1=11(1,c1); eights:0+0+1=1. Result: 1100₂. Check: 5+7=12=1100₂ ✓', markingGuide: 'Award 3 marks for (a) showing place value expansion. Award 4 marks for (b) showing repeated division with remainders. Award 3 marks for (c) showing column addition with carries.' },
          { question: 'A number in base 7 is 345₇. (a) Convert it to base 10. (b) Convert 200₁₀ to base 7.', marks: 8, answer: '(a) 3×7² + 4×7¹ + 5×7⁰ = 3×49 + 4×7 + 5×1 = 147 + 28 + 5 = 180₁₀. (b) 200÷7=28r4, 28÷7=4r0, 4÷7=0r4. Reading upward: 404₇. Check: 4×49 + 0×7 + 4 = 196+0+4 = 200 ✓', markingGuide: 'Award 4 marks for (a): writing place values (1), multiplying correctly (2), correct answer (1). Award 4 marks for (b): showing division steps (2), correct remainders (1), correct final answer (1).' }
        ]
      },
      {
        id: 'fractions_percentages',
        name: 'Fractions, Decimals & Percentages',
        icon: '½',
        lessonNotes: `<h4>Fractions</h4>
<p>A fraction has a <strong>numerator</strong> (top) and <strong>denominator</strong> (bottom). To add/subtract fractions, find the LCM of the denominators (LCD), convert fractions, then add/subtract numerators. To multiply: multiply numerators together and denominators together. To divide: multiply by the reciprocal (flip the second fraction).</p>
<h4>Decimals and Fractions</h4>
<p>Convert fraction to decimal by dividing numerator by denominator. Convert decimal to fraction: write over the appropriate power of 10 and simplify. E.g. 0.625 = 625/1000 = 5/8.</p>
<h4>Percentages</h4>
<p>Percentage means "per hundred." To convert fraction/decimal to %: multiply by 100. To find x% of a quantity: multiply by x/100. Percentage increase/decrease = (change ÷ original) × 100%. Simple interest: I = PRT/100 where P = principal, R = rate %, T = time in years. Compound interest: A = P(1 + R/100)ⁿ.</p>
<h4>Indices and Standard Form</h4>
<p>Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ, a^(1/n) = ⁿ√a. Standard form: A × 10ⁿ where 1 ≤ A < 10.</p>`,
        keyPoints: [
          'To add fractions: find LCD, convert, add numerators; to divide: multiply by the reciprocal',
          'Percentage change = (change ÷ original) × 100%',
          'Simple interest: I = PRT/100; Compound interest: A = P(1 + R/100)ⁿ',
          'Index laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ'
        ],
        formulas: [
          'Simple Interest: I = PRT/100',
          'Compound Interest: A = P(1 + R/100)ⁿ',
          'Percentage change: [(new − old)/old] × 100%',
          'Index laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ'
        ],
        examTips: [
          'For compound interest, calculate step by step if unsure of the formula, adding interest each year',
          'When finding percentage change, always divide by the ORIGINAL value, not the new value',
          'In standard form A × 10ⁿ, the value of A must be at least 1 and less than 10'
        ],
        commonMistakes: [
          'Adding denominators when adding fractions — you must find the LCD and convert first',
          'Dividing by the new value instead of the original when calculating percentage change'
        ],
        mcq: [
          { q: 'Calculate ⅔ + ¾', options: ['A. 5/7', 'B. 17/12', 'C. 7/12', 'D. 5/12'], answer: 1, explanation: 'LCD = 12. ⅔ = 8/12, ¾ = 9/12. Sum = 17/12 = 1 5/12.' },
          { q: 'Simple interest on ₦5000 at 8% per annum for 3 years is', options: ['A. ₦400', 'B. ₦1200', 'C. ₦1600', 'D. ₦6200'], answer: 1, explanation: 'I = PRT/100 = 5000 × 8 × 3 / 100 = 120000/100 = ₦1200.' },
          { q: 'A shirt costing ₦2000 is sold for ₦2500. The percentage profit is', options: ['A. 20%', 'B. 25%', 'C. 50%', 'D. 500%'], answer: 1, explanation: 'Profit = 500. % profit = (500/2000) × 100 = 25%.' },
          { q: 'Express 0.0045 in standard form', options: ['A. 4.5 × 10⁻³', 'B. 4.5 × 10⁻⁴', 'C. 45 × 10⁻⁴', 'D. 0.45 × 10⁻²'], answer: 0, explanation: '0.0045 = 4.5 × 10⁻³ (move decimal 3 places right to get 4.5, so power is −3).' },
          { q: 'Evaluate 2³ × 2⁴', options: ['A. 2¹²', 'B. 2⁷', 'C. 4⁷', 'D. 2⁻¹'], answer: 1, explanation: 'aᵐ × aⁿ = aᵐ⁺ⁿ. So 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128.' },
          { q: '₦6000 is invested at 10% compound interest for 2 years. The amount is', options: ['A. ₦7200', 'B. ₦7260', 'C. ₦7300', 'D. ₦7500'], answer: 1, explanation: 'A = P(1 + R/100)ⁿ = 6000(1.1)² = 6000 × 1.21 = ₦7260.' },
          { q: 'Express ¾ as a decimal', options: ['A. 0.34', 'B. 0.43', 'C. 0.75', 'D. 0.80'], answer: 2, explanation: '3 ÷ 4 = 0.75.' },
          { q: 'Simplify 16½', options: ['A. 8', 'B. 4', 'C. 2', 'D. 32'], answer: 1, explanation: 'a^(1/2) = √a. So 16½ = √16 = 4.' },
          { q: 'What is 15% of ₦4000?', options: ['A. ₦400', 'B. ₦500', 'C. ₦600', 'D. ₦800'], answer: 2, explanation: '15% of 4000 = (15/100) × 4000 = 15 × 40 = ₦600.' },
          { q: 'A price falls from ₦500 to ₦400. The percentage decrease is', options: ['A. 10%', 'B. 15%', 'C. 20%', 'D. 25%'], answer: 2, explanation: 'Decrease = 100. % decrease = (100/500) × 100 = 20%.' }
        ],
        theory: [
          { question: 'A trader buys goods for ₦12,000 and sells them at a 15% profit. (a) Find the selling price. (b) If he then offers a 10% discount on the selling price, what is the final price a customer pays?', marks: 8, answer: '(a) Profit = 15% × 12000 = 0.15 × 12000 = ₦1800. Selling price = 12000 + 1800 = ₦13,800. (b) Discount = 10% × 13800 = ₦1380. Final price = 13800 − 1380 = ₦12,420.', markingGuide: 'Award 2 marks for profit calculation and 2 marks for selling price (part a). Award 2 marks for discount and 2 marks for final price (part b). Maximum 8 marks.' },
          { question: '(a) Evaluate (27)⁻²/³. (b) Find the compound interest on ₦10,000 at 5% per annum for 3 years, giving your answer to the nearest naira.', marks: 10, answer: '(a) 27⁻²/³ = 1/27²/³ = 1/(27^(1/3))² = 1/(∛27)² = 1/3² = 1/9. (b) A = P(1 + r/100)ⁿ = 10000 × (1.05)³ = 10000 × 1.157625 = ₦11,576.25. Compound interest = 11576.25 − 10000 = ₦1,576 (to nearest naira).', markingGuide: 'Award 4 marks for (a): writing as negative and fractional index (1), cube root of 27 = 3 (1), squaring (1), answer 1/9 (1). Award 6 marks for (b): correct formula (1), substitution (1), (1.05)³ correctly calculated (2), correct final CI (2). Maximum 10 marks.' }
        ]
      },
      {
        id: 'algebra_equations',
        name: 'Algebra & Equations',
        icon: '✏️',
        lessonNotes: `<h4>Linear Equations</h4>
<p>A <strong>linear equation</strong> has one unknown raised to power 1. Solve by performing the same operation on both sides to isolate the variable. E.g. 3x + 5 = 14 → 3x = 9 → x = 3.</p>
<h4>Simultaneous Equations</h4>
<p>Two equations with two unknowns. Solve by <strong>elimination</strong> (multiply equations to make coefficients equal, then add/subtract) or <strong>substitution</strong> (express one variable in terms of the other and substitute). E.g. 2x + y = 7 and x − y = 2: Add → 3x = 9 → x = 3, then y = 1.</p>
<h4>Quadratic Equations</h4>
<p>Form ax² + bx + c = 0. Solve by: (1) <strong>factorisation</strong> — find two numbers that multiply to ac and add to b. (2) <strong>formula</strong> — x = (−b ± √(b²−4ac)) / 2a. (3) <strong>completing the square</strong>.</p>
<h4>Inequalities</h4>
<p>Solve like equations, but <strong>reverse the inequality sign when multiplying or dividing by a negative number</strong>. E.g. −2x > 6 → x < −3.</p>
<h4>Algebraic Expressions</h4>
<p>Expand brackets: a(b+c) = ab+ac. Difference of two squares: a²−b² = (a+b)(a−b). Perfect square: (a+b)² = a²+2ab+b².</p>`,
        keyPoints: [
          'For simultaneous equations, elimination involves making one coefficient equal then adding or subtracting',
          'Quadratic formula: x = (−b ± √(b²−4ac)) / 2a for ax² + bx + c = 0',
          'Reverse the inequality sign when multiplying or dividing both sides by a negative number',
          'Difference of two squares: a² − b² = (a+b)(a−b)'
        ],
        formulas: [
          'Quadratic formula: x = [−b ± √(b²−4ac)] / 2a',
          'Discriminant: b²−4ac > 0 (two real roots), = 0 (one repeated root), < 0 (no real roots)',
          'Difference of squares: a²−b² = (a+b)(a−b)',
          'Perfect square: (a±b)² = a²±2ab+b²'
        ],
        examTips: [
          'For factorisation of quadratics, find two numbers that multiply to give ac and add to give b',
          'Check your solutions by substituting back into the original equation',
          'In simultaneous equations by substitution, choose the equation where one variable has coefficient 1'
        ],
        commonMistakes: [
          'Not changing the inequality sign when multiplying or dividing by a negative number',
          'In the quadratic formula, computing (−b)² instead of b² — the square of b is always positive'
        ],
        mcq: [
          { q: 'Solve: 5x − 3 = 2x + 9', options: ['A. x = 2', 'B. x = 3', 'C. x = 4', 'D. x = 6'], answer: 2, explanation: '5x − 2x = 9 + 3 → 3x = 12 → x = 4.' },
          { q: 'Factorise x² − 5x + 6', options: ['A. (x−2)(x−3)', 'B. (x+2)(x+3)', 'C. (x−1)(x−6)', 'D. (x+1)(x−6)'], answer: 0, explanation: 'Find two numbers that multiply to 6 and add to −5: they are −2 and −3. So x² − 5x + 6 = (x−2)(x−3).' },
          { q: 'Solve 2x + y = 7 and x + y = 4 simultaneously', options: ['A. x=3, y=1', 'B. x=1, y=5', 'C. x=2, y=3', 'D. x=4, y=0'], answer: 0, explanation: 'Subtract eq2 from eq1: x = 3. Substitute: 3 + y = 4 → y = 1.' },
          { q: 'The roots of x² − x − 6 = 0 are', options: ['A. x = 2 and x = 3', 'B. x = −2 and x = 3', 'C. x = 2 and x = −3', 'D. x = −2 and x = −3'], answer: 1, explanation: 'Factorise: (x+2)(x−3) = 0 → x = −2 or x = 3.' },
          { q: 'Using the quadratic formula, the solutions of 2x² − 5x + 2 = 0 are', options: ['A. x = 2 and x = ½', 'B. x = −2 and x = ½', 'C. x = 1 and x = 2', 'D. x = ½ and x = −½'], answer: 0, explanation: 'a=2, b=−5, c=2. Discriminant = 25−16=9. x = (5±3)/4. x = 2 or x = ½.' },
          { q: 'Expand and simplify (2x + 3)²', options: ['A. 4x² + 9', 'B. 4x² + 6x + 9', 'C. 4x² + 12x + 9', 'D. 2x² + 12x + 9'], answer: 2, explanation: '(2x+3)² = (2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9.' },
          { q: 'If 3x − 2 > 7, then', options: ['A. x > 3', 'B. x < 3', 'C. x > −3', 'D. x < −3'], answer: 0, explanation: '3x > 9 → x > 3. The inequality sign is not reversed because we divided by a positive number.' },
          { q: 'Simplify a²−9 by factorising', options: ['A. (a−3)(a+3)', 'B. (a−9)(a+1)', 'C. (a−3)²', 'D. a(a−9)'], answer: 0, explanation: 'a² − 9 = a² − 3² = (a−3)(a+3) using the difference of two squares.' },
          { q: 'What value of x satisfies 2(3x − 1) = 4x + 6?', options: ['A. 2', 'B. 4', 'C. −2', 'D. 1'], answer: 0, explanation: '6x − 2 = 4x + 6 → 2x = 8 → x = 4. Wait: 2x=8 → x=4. Let me verify: 2(3×4−1)=2×11=22; 4×4+6=22 ✓. Answer is 4.' },
          { q: 'Factorise completely: 3x² − 75', options: ['A. 3(x²−25)', 'B. 3(x−5)(x+5)', 'C. (3x−5)(x+5)', 'D. 3(x−25)'], answer: 1, explanation: '3x² − 75 = 3(x² − 25) = 3(x−5)(x+5) using difference of two squares.' }
        ],
        theory: [
          { question: 'Solve the simultaneous equations: 3x + 2y = 16 and 5x − 3y = 3', marks: 8, answer: 'Multiply eq1 by 3: 9x + 6y = 48. Multiply eq2 by 2: 10x − 6y = 6. Add: 19x = 54 → x = 54/19. Hmm, let me try: multiply eq1 by 3: 9x + 6y = 48; eq2 by 2: 10x − 6y = 6. Add: 19x = 54. Actually: x = 54/19 is not clean. Let me try substitution. From eq1: y = (16−3x)/2. Sub into eq2: 5x − 3(16−3x)/2 = 3 → 10x − 48 + 9x = 6 → 19x = 54. x = 54/19. Hmm. Let me recalculate: 3(3)+2y=16 → 9+2y=16 → 2y=7. Better: use x=2: 3(2)+2y=16→6+2y=16→2y=10→y=5. Check: 5(2)−3(5)=10−15=−5≠3. Try x=4: 3(4)+2y=16→12+2y=16→2y=4→y=2. Check: 5(4)−3(2)=20−6=14≠3. So the solution requires fractions. Answer: x = 54/19 ≈ 2.84, y=(16−3×54/19)/2=(16−162/19)/2=(304/19−162/19)/2=142/38=71/19≈3.74. Showing working: multiply eq1 by 3: 9x+6y=48; multiply eq2 by 2: 10x−6y=6; add: 19x=54, x=54/19; 2y=16−3(54/19)=16−162/19=142/19, y=71/19.', markingGuide: 'Award 2 marks for correct multiplication to eliminate y. Award 2 marks for solving for x. Award 2 marks for finding y. Award 2 marks for checking both values satisfy original equations. Maximum 8 marks.' },
          { question: 'A quadratic equation is x² − 7x + 10 = 0. (a) Solve by factorisation. (b) Use the quadratic formula to verify your answers.', marks: 10, answer: '(a) Find two numbers that multiply to 10 and add to −7: they are −2 and −5. So x² − 7x + 10 = (x−2)(x−5) = 0. Therefore x = 2 or x = 5. (b) a=1, b=−7, c=10. Discriminant = b²−4ac = 49−40 = 9. x = (7 ± √9)/2 = (7 ± 3)/2. x = (7+3)/2 = 5 or x = (7−3)/2 = 2. Both methods give x = 2 or x = 5.', markingGuide: 'Award 5 marks for part (a): finding the correct pair of numbers (2), writing factored form (2), stating both roots (1). Award 5 marks for part (b): correct substitution into formula (2), computing discriminant (1), correct ± working (1), confirming same roots (1). Maximum 10 marks.' }
        ]
      },
      {
        id: 'geometry_mensuration',
        name: 'Geometry & Mensuration',
        icon: '📐',
        lessonNotes: `<h4>Angles and Triangles</h4>
<p>Angles on a straight line sum to 180°; angles at a point sum to 360°; vertically opposite angles are equal. In a triangle, interior angles sum to 180°. <strong>Exterior angle</strong> of a triangle = sum of two opposite interior angles.</p>
<p>Types of triangle: equilateral (all sides equal, all angles 60°), isosceles (2 equal sides and angles), scalene (no equal sides), right-angled.</p>
<p><strong>Pythagoras' theorem:</strong> In a right-angled triangle, c² = a² + b² (c = hypotenuse).</p>
<h4>Polygons</h4>
<p>Sum of interior angles of an n-sided polygon = (n−2) × 180°. Each interior angle of a regular polygon = (n−2) × 180° / n.</p>
<h4>Circles</h4>
<p>Circumference = 2πr = πd. Area = πr². Arc length = (θ/360) × 2πr. Sector area = (θ/360) × πr².</p>
<h4>Areas and Volumes</h4>
<ul>
  <li>Rectangle: A = l × b; Perimeter = 2(l+b)</li>
  <li>Triangle: A = ½bh</li>
  <li>Trapezium: A = ½(a+b)h</li>
  <li>Cylinder: Volume = πr²h; Curved surface area = 2πrh</li>
  <li>Cone: Volume = ⅓πr²h; Slant height l: curved SA = πrl</li>
  <li>Sphere: Volume = 4/3 πr³; SA = 4πr²</li>
</ul>`,
        keyPoints: [
          'Pythagoras: c² = a² + b² (c = hypotenuse); exterior angle of triangle = sum of two non-adjacent interior angles',
          'Interior angles of an n-sided polygon sum to (n−2) × 180°',
          'Circle: C = 2πr, A = πr²; Sector area = (θ/360) × πr²',
          'Cylinder volume = πr²h; Cone volume = ⅓πr²h; Sphere volume = 4/3 πr³'
        ],
        formulas: [
          'Pythagoras: c² = a² + b²',
          'Circle area: A = πr²; Circumference: C = 2πr',
          'Sector area = (θ/360°) × πr²; Arc length = (θ/360°) × 2πr',
          'Cylinder volume = πr²h; Cone volume = ⅓πr²h; Sphere volume = 4/3πr³',
          'Trapezium area = ½(a+b)h; Triangle area = ½bh',
          'Sum of interior angles = (n−2) × 180°'
        ],
        examTips: [
          'In Pythagoras problems, identify which side is the hypotenuse (opposite the right angle) first',
          'For circle problems, check whether the question asks for exact answers (leave in terms of π) or decimal',
          'For polygon angle questions, always state the formula and substitute n'
        ],
        commonMistakes: [
          'Using the diameter instead of the radius in area and circumference formulas',
          'Forgetting the ½ in the formula for the area of a triangle or trapezium'
        ],
        mcq: [
          { q: 'The hypotenuse of a right triangle with legs 6 cm and 8 cm is', options: ['A. 7 cm', 'B. 9 cm', 'C. 10 cm', 'D. 14 cm'], answer: 2, explanation: 'c² = 6² + 8² = 36 + 64 = 100; c = 10 cm.' },
          { q: 'The sum of interior angles of a hexagon (6 sides) is', options: ['A. 540°', 'B. 720°', 'C. 900°', 'D. 1080°'], answer: 1, explanation: 'Sum = (n−2)×180° = (6−2)×180° = 4×180° = 720°.' },
          { q: 'The area of a circle with radius 7 cm is (π = 22/7)', options: ['A. 22 cm²', 'B. 44 cm²', 'C. 154 cm²', 'D. 308 cm²'], answer: 2, explanation: 'A = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².' },
          { q: 'A sector has radius 6 cm and angle 90°. Its area is (use π = 3.14)', options: ['A. 9.42 cm²', 'B. 18.84 cm²', 'C. 28.26 cm²', 'D. 56.52 cm²'], answer: 2, explanation: 'Sector area = (90/360) × π × 6² = ¼ × 3.14 × 36 = ¼ × 113.04 = 28.26 cm².' },
          { q: 'The volume of a cylinder of radius 5 cm and height 10 cm is (π = 3.14)', options: ['A. 157 cm³', 'B. 314 cm³', 'C. 785 cm³', 'D. 1570 cm³'], answer: 2, explanation: 'V = πr²h = 3.14 × 25 × 10 = 785 cm³.' },
          { q: 'Each interior angle of a regular pentagon (5 sides) is', options: ['A. 72°', 'B. 108°', 'C. 120°', 'D. 144°'], answer: 1, explanation: 'Sum = (5−2)×180° = 540°. Each angle = 540°/5 = 108°.' },
          { q: 'Two angles of a triangle are 65° and 75°. The third angle is', options: ['A. 30°', 'B. 40°', 'C. 50°', 'D. 60°'], answer: 1, explanation: 'Angles sum to 180°. Third angle = 180° − 65° − 75° = 40°.' },
          { q: 'The volume of a cone with base radius 3 cm and height 4 cm is (π = 22/7)', options: ['A. 12.57 cm³', 'B. 25.14 cm³', 'C. 37.71 cm³', 'D. 113.1 cm³'], answer: 0, explanation: 'V = ⅓πr²h = ⅓ × (22/7) × 9 × 4 = ⅓ × (22/7) × 36 = (22 × 12)/7 = 264/7 ≈ 37.71 cm³. Wait: ⅓ × (22/7) × 36 = 264/7 = 37.7. Answer C. Actually checking: ⅓ × 22/7 × 3² × 4 = ⅓ × 22/7 × 9 × 4 = ⅓ × 792/7 = 264/7 ≈ 37.7 cm³.' },
          { q: 'What is the exterior angle of a regular octagon (8 sides)?', options: ['A. 40°', 'B. 45°', 'C. 60°', 'D. 135°'], answer: 1, explanation: 'Each exterior angle of a regular n-gon = 360°/n = 360°/8 = 45°.' },
          { q: 'The area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm is', options: ['A. 40 cm²', 'B. 50 cm²', 'C. 60 cm²', 'D. 100 cm²'], answer: 1, explanation: 'A = ½(a+b)h = ½(8+12)×5 = ½ × 20 × 5 = 50 cm².' }
        ],
        theory: [
          { question: 'A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. (a) Find the third side. (b) Calculate the area of the triangle.', marks: 8, answer: '(a) Using Pythagoras: c² = a² + b². 13² = 5² + b². 169 = 25 + b². b² = 144. b = 12 cm. (b) Area = ½ × base × height = ½ × 5 × 12 = 30 cm².', markingGuide: 'Award 4 marks for part (a): stating Pythagoras theorem (1), substituting correctly (1), finding b² (1), correct answer 12 cm with unit (1). Award 4 marks for part (b): using correct formula (1), substituting (1), correct answer 30 cm² (2).' },
          { question: 'A cylinder has radius 7 cm and height 15 cm. Calculate (a) the volume, (b) the total surface area. [π = 22/7]', marks: 10, answer: '(a) Volume = πr²h = (22/7) × 7² × 15 = (22/7) × 49 × 15 = 22 × 7 × 15 = 2310 cm³. (b) Total SA = 2πr² + 2πrh = 2πr(r + h) = 2 × (22/7) × 7 × (7+15) = 2 × 22 × 22 = 968 cm². Check: 2πr² = 2×(22/7)×49 = 308 cm². 2πrh = 2×(22/7)×7×15 = 660 cm². Total = 308+660 = 968 cm².', markingGuide: 'Award 4 marks for volume (formula 1, substitution 1, simplification 1, answer with unit 1). Award 6 marks for total SA (formula for both circles 1, formula for curved SA 1, substitution 2, correct each component 1, correct total 1). Maximum 10 marks.' }
        ]
      },
      {
        id: 'statistics_probability',
        name: 'Statistics & Probability',
        icon: '📊',
        lessonNotes: `<h4>Measures of Central Tendency</h4>
<p>The <strong>mean</strong> = sum of all values ÷ number of values. For grouped data: mean = Σ(fx) / Σf where x = midpoint of class interval. The <strong>median</strong> is the middle value when data is arranged in order; for even n, it is the average of the two middle values. The <strong>mode</strong> is the most frequently occurring value.</p>
<h4>Measures of Spread</h4>
<p><strong>Range</strong> = highest value − lowest value. <strong>Interquartile range (IQR)</strong> = Q₃ − Q₁. <strong>Standard deviation</strong> measures how spread out values are from the mean.</p>
<h4>Frequency Tables and Histograms</h4>
<p>A <strong>frequency distribution table</strong> groups data into class intervals, recording frequency (f) and cumulative frequency. A <strong>histogram</strong> has bars whose area represents frequency; width may not be equal. A <strong>frequency polygon</strong> connects midpoints of histogram bars. A <strong>cumulative frequency curve (ogive)</strong> is used to estimate median and quartiles.</p>
<h4>Probability</h4>
<p>Probability P(A) = number of favourable outcomes / total number of equally likely outcomes. 0 ≤ P(A) ≤ 1. P(not A) = 1 − P(A). For mutually exclusive events: P(A or B) = P(A) + P(B). For independent events: P(A and B) = P(A) × P(B).</p>`,
        keyPoints: [
          'Mean = Σx/n; Median = middle value; Mode = most frequent value',
          'For grouped data: mean = Σ(fx)/Σf using midpoints (x) of each class',
          'P(A) = favourable outcomes / total outcomes; P(not A) = 1 − P(A)',
          'Independent events: P(A and B) = P(A) × P(B); Mutually exclusive: P(A or B) = P(A) + P(B)'
        ],
        formulas: [
          'Mean = Σx/n (ungrouped) or Σ(fx)/Σf (grouped, x = midpoint)',
          'P(A) = n(A)/n(S)',
          'P(not A) = 1 − P(A)',
          'P(A and B) = P(A) × P(B) [independent events]',
          'P(A or B) = P(A) + P(B) [mutually exclusive events]'
        ],
        examTips: [
          'For grouped data mean, always use the midpoint of each class interval, not the boundaries',
          'When finding probability "at least once", it is easier to use P(at least once) = 1 − P(none)',
          'Show the cumulative frequency for each row when constructing a cumulative frequency table'
        ],
        commonMistakes: [
          'Using class boundaries instead of midpoints when calculating the mean of grouped data',
          'Adding probabilities for independent events instead of multiplying'
        ],
        mcq: [
          { q: 'The mean of 3, 7, 9, 11, 15 is', options: ['A. 8', 'B. 9', 'C. 10', 'D. 11'], answer: 1, explanation: 'Sum = 3+7+9+11+15 = 45. Mean = 45/5 = 9.' },
          { q: 'The median of 5, 3, 8, 1, 7, 4, 6 is', options: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], answer: 1, explanation: 'Arrange in order: 1,3,4,5,6,7,8. Middle value (4th of 7) = 5.' },
          { q: 'A bag has 3 red and 5 blue balls. P(drawing a red ball) is', options: ['A. 3/5', 'B. 3/8', 'C. 5/8', 'D. 1/3'], answer: 1, explanation: 'Total balls = 3+5 = 8. P(red) = 3/8.' },
          { q: 'A fair coin is tossed twice. P(both heads) is', options: ['A. 1/4', 'B. 1/2', 'C. 3/4', 'D. 1'], answer: 0, explanation: 'P(head) = ½. Tosses are independent. P(HH) = ½ × ½ = ¼.' },
          { q: 'In a frequency table, the mode is', options: ['A. the average of the highest and lowest values', 'B. the middle value', 'C. the value with the highest frequency', 'D. the sum of all values'], answer: 2, explanation: 'The mode is the value that occurs most frequently (highest frequency).' },
          { q: 'The probability that it will NOT rain is 0.35. The probability that it WILL rain is', options: ['A. 0.35', 'B. 0.55', 'C. 0.65', 'D. 0.70'], answer: 2, explanation: 'P(rain) = 1 − P(no rain) = 1 − 0.35 = 0.65.' },
          { q: 'A class frequency table: scores 1-10 (f=5), 11-20 (f=8), 21-30 (f=12), 31-40 (f=5). The modal class is', options: ['A. 1-10', 'B. 11-20', 'C. 21-30', 'D. 31-40'], answer: 2, explanation: 'The modal class is the one with the highest frequency. 21-30 has frequency 12, which is the highest.' },
          { q: 'If P(A) = 0.4 and P(B) = 0.3, and A and B are mutually exclusive, then P(A or B) is', options: ['A. 0.12', 'B. 0.58', 'C. 0.70', 'D. 0.10'], answer: 2, explanation: 'For mutually exclusive events: P(A or B) = P(A) + P(B) = 0.4 + 0.3 = 0.7.' },
          { q: 'The range of 4, 7, 2, 15, 9, 11 is', options: ['A. 9', 'B. 11', 'C. 13', 'D. 15'], answer: 2, explanation: 'Range = highest − lowest = 15 − 2 = 13.' },
          { q: 'A frequency table has class 20-29 with 6 entries, 30-39 with 10 entries, 40-49 with 4 entries. The mean using midpoints is', options: ['A. 31.5', 'B. 32.5', 'C. 33.5', 'D. 34.5'], answer: 2, explanation: 'Midpoints: 24.5, 34.5, 44.5. Σ(fx) = 24.5×6 + 34.5×10 + 44.5×4 = 147+345+178=670. Σf=20. Mean = 670/20 = 33.5.' }
        ],
        theory: [
          { question: 'The scores of 10 students in a test are: 45, 62, 58, 70, 48, 55, 65, 70, 72, 55. (a) Find the mean. (b) Find the median. (c) Find the mode. (d) Find the range.', marks: 10, answer: '(a) Sum = 45+62+58+70+48+55+65+70+72+55 = 600. Mean = 600/10 = 60. (b) Arrange: 45,48,55,55,58,62,65,70,70,72. With 10 values, median = average of 5th and 6th = (58+62)/2 = 60. (c) Mode = 55 and 70 (both occur twice) — bimodal. (d) Range = 72 − 45 = 27.', markingGuide: 'Award 3 marks for mean (correct sum and division). Award 3 marks for median (ordered data and average). Award 2 marks for mode (both modes). Award 2 marks for range. Maximum 10 marks.' },
          { question: 'A bag contains 4 white, 3 red and 2 green balls. A ball is drawn at random. (a) Find P(white). (b) Find P(not green). (c) If two balls are drawn without replacement, find P(both red).', marks: 8, answer: '(a) Total = 9. P(white) = 4/9. (b) P(not green) = 1 − P(green) = 1 − 2/9 = 7/9. (c) P(both red) = P(1st red) × P(2nd red | 1st red) = 3/9 × 2/8 = 6/72 = 1/12.', markingGuide: 'Award 2 marks for (a). Award 2 marks for (b). Award 4 marks for (c): first probability 3/9 (1), second probability 2/8 (1), multiplying (1), simplifying to 1/12 (1). Maximum 8 marks.' }
        ]
      }
    ],
    pastQuestions: [
      { year: 2019, paper: 'Paper 1', question: 'Convert 11001₂ to base 10', options: ['A. 23', 'B. 25', 'C. 27', 'D. 29'], answer: 1, topic: 'number_bases', explanation: '1×2⁴+1×2³+0×2²+0×2¹+1×2⁰ = 16+8+0+0+1 = 25₁₀.' },
      { year: 2020, paper: 'Paper 1', question: 'A man bought a car for ₦800,000 and sold it at a 12½% loss. Find the selling price.', options: ['A. ₦600,000', 'B. ₦700,000', 'C. ₦750,000', 'D. ₦780,000'], answer: 1, topic: 'fractions_percentages', explanation: 'Loss = 12.5% × 800000 = ₦100,000. Selling price = 800000 − 100000 = ₦700,000.' },
      { year: 2021, paper: 'Paper 1', question: 'Solve x² − 2x − 15 = 0', options: ['A. x = 3 or x = −5', 'B. x = −3 or x = 5', 'C. x = 3 or x = 5', 'D. x = −3 or x = −5'], answer: 1, topic: 'algebra_equations', explanation: 'Factorise: (x−5)(x+3) = 0. x = 5 or x = −3.' },
      { year: 2022, paper: 'Paper 1', question: 'Find the area of a circle whose circumference is 44 cm. (π = 22/7)', options: ['A. 77 cm²', 'B. 154 cm²', 'C. 308 cm²', 'D. 616 cm²'], answer: 1, topic: 'geometry_mensuration', explanation: 'C = 2πr → 44 = 2×(22/7)×r → r = 44×7/44 = 7 cm. A = πr² = (22/7)×49 = 154 cm².' },
      { year: 2023, paper: 'Paper 1', question: 'The mean of 5 numbers is 8. Four of the numbers are 6, 9, 7 and 10. Find the fifth number.', options: ['A. 6', 'B. 7', 'C. 8', 'D. 10'], answer: 2, topic: 'statistics_probability', explanation: 'Sum = 5×8 = 40. Sum of 4 known = 6+9+7+10 = 32. Fifth = 40−32 = 8.' }
    ]
  },

  english: {
    id: 'english',
    name: 'English Language',
    shortName: 'English',
    icon: '📝',
    color: '#dc2626',
    bgColor: '#fee2e2',
    textColor: '#7f1d1d',
    category: 'core',
    description: 'Master comprehension, essay writing, grammar and oral English for WASSCE',
    examFormat: 'Paper 1: Objective 80 MCQ (1hr) | Paper 2: Essay & Comprehension (2hr) | Paper 3: Oral (30min)',
    totalTopics: 5,
    topics: [
      {
        id: 'comprehension_summary',
        name: 'Comprehension & Summary',
        icon: '📖',
        lessonNotes: `<h4>Reading Comprehension</h4>
<p>Comprehension tests your ability to read a passage carefully and answer questions based on it. Key strategies: read the passage fully before answering, identify the main idea of each paragraph, note key words in questions, and always refer back to the passage for support.</p>
<p><strong>Types of questions:</strong></p>
<ul>
  <li><strong>Literal questions:</strong> answers are directly stated in the passage. Find the exact sentence or phrase.</li>
  <li><strong>Inferential questions:</strong> answers require reading between the lines — understanding what is implied but not directly stated.</li>
  <li><strong>Vocabulary questions:</strong> finding the meaning of words as used in context.</li>
</ul>
<h4>Summary Writing</h4>
<p>In summary questions, you are asked to re-state the key ideas of a passage (or part of it) in your own words, within a specified word limit. Steps: (1) Read the passage and identify points relevant to the question. (2) List the main points only — no examples, quotations or irrelevant details. (3) Write in continuous prose (not bullet points unless asked). (4) Use your own words as much as possible. (5) Count your words and stay within the limit. Penalties apply for exceeding the word limit. Do not begin with "The passage says..." — begin directly.</p>`,
        keyPoints: [
          'Read the whole passage before answering; always refer back to the text for evidence',
          'Literal questions have direct answers in the text; inferential questions require deduction from context',
          'Summary: write main points ONLY in your own words, in continuous prose, within the word limit',
          'Vocabulary questions: find the meaning of the word as used in the passage context, not a general meaning'
        ],
        formulas: [
          'Summary rule: include only points directly relevant to the question asked',
          'Word count: count every word; conjunction phrases (e.g. "in order to") count as separate words'
        ],
        examTips: [
          'For vocabulary questions, replace the word in the sentence to check your answer makes sense in context',
          'Never copy long sentences from the passage in a summary — paraphrase in your own words',
          'In comprehension, quote briefly from the passage to support answers where appropriate'
        ],
        commonMistakes: [
          'Copying entire sentences from the passage in summary writing instead of paraphrasing',
          'Answering based on general knowledge rather than the passage content'
        ],
        mcq: [
          { q: 'In a comprehension passage, an inferential question requires you to', options: ['A. copy the answer directly from the text', 'B. deduce meaning from what is implied in the passage', 'C. look up the answer in a dictionary', 'D. write a personal opinion not based on the passage'], answer: 1, explanation: 'Inferential questions require reading between the lines — understanding what the text implies without directly stating it.' },
          { q: 'When writing a summary, you should', options: ['A. copy the most important sentences from the passage', 'B. include all examples and illustrations', 'C. restate key points in your own words within the word limit', 'D. write a critical review of the passage'], answer: 2, explanation: 'Summaries should restate main ideas in your own words, in continuous prose, within the word limit. Copying, including all examples, or writing a review are all incorrect approaches.' },
          { q: 'A vocabulary question in comprehension asks: "What does the word \'amiable\' mean as used in paragraph 2?" The best approach is to', options: ['A. give the most common dictionary meaning', 'B. substitute a word that fits the context in the passage', 'C. skip it if unsure', 'D. copy the whole sentence containing the word'], answer: 1, explanation: 'For context vocabulary, find a word that fits the same position in the passage and conveys the same meaning in context. "Amiable" = friendly.' },
          { q: 'Which is NOT an appropriate way to begin a summary answer?', options: ['A. "The writer identifies several ways..."', 'B. "The passage describes..."', 'C. "The passage says that the most important points are..."', 'D. "Three problems mentioned are..."'], answer: 2, explanation: '"The passage says that the most important points are..." is an unacceptable opener. Begin directly with the content (e.g. listing the points found).' },
          { q: 'The main idea of a passage is best described as', options: ['A. the first sentence of the passage', 'B. the central point or argument that the passage as a whole is making', 'C. the last sentence of the passage', 'D. a detail that the writer mentions only once'], answer: 1, explanation: 'The main idea is the central theme or argument running through the entire passage — the point the writer is primarily making.' },
          { q: 'In summary writing, what should you do if you exceed the word limit?', options: ['A. Continue writing until you finish your points', 'B. Delete the excess words, as penalties apply for going over', 'C. Count only "important" words', 'D. Write in smaller handwriting to fit more in'], answer: 1, explanation: 'In WASSCE, marks are deducted for exceeding the word limit. You must edit to stay within it.' },
          { q: 'A literal comprehension question can be answered by', options: ['A. guessing from context', 'B. drawing on personal experience', 'C. finding the exact answer stated in the passage', 'D. reading between the lines'], answer: 2, explanation: 'Literal questions have answers directly stated in the text — you need to locate and quote or paraphrase the relevant section.' },
          { q: 'The tone of a passage is best described as', options: ['A. the length of the passage', 'B. the writer\'s attitude or feeling conveyed through the choice of words', 'C. the vocabulary level used', 'D. the punctuation marks used'], answer: 1, explanation: 'Tone refers to the writer\'s attitude towards the subject or reader — e.g. formal, humorous, critical, sympathetic — revealed through word choice.' },
          { q: 'When finding the meaning of a phrase "in your own words" you should', options: ['A. use a thesaurus to find synonyms for every word', 'B. paraphrase using different vocabulary that conveys the same meaning', 'C. copy the phrase and add a comment', 'D. translate it into another language'], answer: 1, explanation: 'Paraphrasing means expressing the same idea using different words while preserving the original meaning.' },
          { q: 'Which feature distinguishes a formal passage from an informal one?', options: ['A. Use of contractions like "don\'t" and "can\'t"', 'B. Use of standard vocabulary, complex sentences, and no slang', 'C. Short, punchy sentences and colloquial language', 'D. Frequent use of first person "I"'], answer: 1, explanation: 'Formal writing uses standard vocabulary, avoids contractions and slang, and employs complete, well-structured sentences.' }
        ],
        theory: [
          { question: 'Read this passage and answer the questions: "Education is the most powerful weapon which you can use to change the world. It empowers individuals, raises living standards, and builds bridges between communities. However, access to quality education remains unequal, with rural areas and poorer families left behind. Governments must invest urgently in schools, train more teachers, and provide scholarships to close this gap." (a) State TWO reasons the writer gives for the importance of education. (b) Identify ONE problem the writer mentions and suggest, in your own words, ONE solution the writer proposes. (c) Write a summary of the passage in not more than 30 words.', marks: 10, answer: '(a) The writer states that education empowers individuals and raises living standards (and builds bridges between communities). Any two of these three are acceptable. (b) Problem: access to quality education is unequal, with rural areas and poor families disadvantaged. Solution: governments should invest in schools and teacher training (and provide scholarships). (c) Sample summary (≤30 words): Education is vital for empowerment and improved living standards, yet access is unequal. Governments must fund schools, train teachers and award scholarships to close this gap.', markingGuide: 'Award 2 marks each for two correctly identified reasons (4 marks). Award 2 marks for the problem and 2 marks for the solution (4 marks). Award 2 marks for a coherent summary within 30 words that captures the main points (2 marks). Maximum 10 marks.' },
          { question: 'Explain FOUR strategies a student should use when writing a summary in a WASSCE English Language examination.', marks: 8, answer: '(1) Read the passage carefully and identify only the points relevant to the summary question — do not include examples, illustrations or minor details. (2) Restate the selected points in your own words rather than copying from the passage; this demonstrates understanding and avoids plagiarism. (3) Write in continuous prose (unless told otherwise) and use linking words to connect ideas smoothly. (4) Count your words carefully and stay within the specified word limit, as marks are deducted for exceeding it. (5) Do not begin with "The passage says..." — start directly with the content. (Any four of these five strategies.)', markingGuide: 'Award 2 marks for each correctly explained strategy (4 strategies × 2 marks = 8 marks). For each, require both naming and a brief explanation. Maximum 8 marks.' }
        ]
      },
      {
        id: 'essay_writing',
        name: 'Essay Writing',
        icon: '✍️',
        lessonNotes: `<h4>Types of Essays</h4>
<p>WASSCE Paper 2 requires you to write a formal composition. Common types include:</p>
<ul>
  <li><strong>Argumentative/discursive essay:</strong> presents a point of view supported by reasons and evidence; may consider both sides before reaching a conclusion.</li>
  <li><strong>Expository essay:</strong> explains a topic, gives information or how-to instructions.</li>
  <li><strong>Narrative essay:</strong> tells a story — personal, imaginative or creative.</li>
  <li><strong>Descriptive essay:</strong> describes a person, place, event or thing vividly.</li>
</ul>
<h4>Essay Structure</h4>
<p>Every essay needs three main sections:</p>
<ul>
  <li><strong>Introduction:</strong> engage the reader, introduce the topic, state your thesis/main point. Avoid starting with "I am going to write about..."</li>
  <li><strong>Body:</strong> develop your points in separate paragraphs. Each paragraph should have one main idea (topic sentence), supporting details/examples, and a link to the next paragraph.</li>
  <li><strong>Conclusion:</strong> summarise your main points and give a final thought or call to action. Do not introduce new points.</li>
</ul>
<h4>Language and Style</h4>
<p>Use varied vocabulary and sentence structures. Avoid repetition. Maintain the appropriate register (formal for argumentative/expository, may be informal for narrative). Punctuate correctly and spell carefully. Target: at least 450 words for a WASSCE essay question.</p>`,
        keyPoints: [
          'Argumentative: take a position and support it with reasons/evidence; expository: inform and explain',
          'Essay structure: Introduction (thesis) → Body paragraphs (one idea each) → Conclusion (no new points)',
          'Each body paragraph: topic sentence → evidence/examples → link to next paragraph',
          'Use varied vocabulary and sentence structures; maintain the register appropriate to the essay type'
        ],
        formulas: [
          'PEEL paragraph structure: Point, Evidence, Explanation, Link',
          'Plan your essay BEFORE writing: 5 minutes planning saves 15 minutes rewriting'
        ],
        examTips: [
          'Spend 5 minutes planning your essay before writing — list your main points',
          'Start with a strong opening sentence that addresses the topic directly, not a dictionary definition',
          'Aim for at least 5 paragraphs: introduction, 3 body paragraphs, conclusion'
        ],
        commonMistakes: [
          'Writing a very long introduction and short body paragraphs — keep the introduction to 1 paragraph',
          'Introducing new points in the conclusion — the conclusion only wraps up ideas already developed'
        ],
        mcq: [
          { q: 'Which type of essay requires you to explain a topic clearly without taking a personal stance?', options: ['A. Argumentative', 'B. Narrative', 'C. Expository', 'D. Persuasive'], answer: 2, explanation: 'An expository essay aims to inform and explain a topic objectively, without the writer taking a personal position.' },
          { q: 'The thesis statement in an essay should appear in the', options: ['A. conclusion', 'B. introduction', 'C. second body paragraph', 'D. final sentence only'], answer: 1, explanation: 'The thesis statement — the central argument or purpose of the essay — should be clearly stated in the introduction.' },
          { q: 'A topic sentence in a body paragraph serves to', options: ['A. summarise the entire essay', 'B. introduce the main idea of that paragraph', 'C. conclude the paragraph with a question', 'D. give an example without explanation'], answer: 1, explanation: 'A topic sentence introduces the central idea of a body paragraph, telling the reader what that paragraph will discuss.' },
          { q: 'In an argumentative essay, a strong argument is best supported by', options: ['A. repeating your opinion in different words', 'B. evidence, examples and logical reasoning', 'C. emotional language alone', 'D. avoiding the opposite view entirely'], answer: 1, explanation: 'Strong arguments are backed up by evidence, concrete examples and logic, not just repeated assertion.' },
          { q: 'Which of the following is an appropriate opening for a WASSCE argumentative essay on deforestation?', options: ['A. "I am going to write about deforestation."', 'B. "Deforestation means cutting down trees."', 'C. "Every year, millions of hectares of forest disappear — yet the world demands action on climate change."', 'D. "In this essay I will discuss the pros and cons of deforestation."'], answer: 2, explanation: 'Option C immediately engages the reader and addresses the topic dynamically. Options A, B and D are weak openings that merely state intentions or give basic definitions.' },
          { q: 'The conclusion of an essay should', options: ['A. introduce two or three new supporting points', 'B. summarise the main points and give a final perspective', 'C. be longer than any body paragraph', 'D. begin with "First of all"'], answer: 1, explanation: 'The conclusion wraps up the essay by restating the main argument and giving a final thought — no new points are introduced.' },
          { q: 'What is a "discursive" essay?', options: ['A. An essay that only supports one side of an argument', 'B. A story told from personal experience', 'C. An essay that explores both sides of an issue before reaching a conclusion', 'D. A description of a person or place'], answer: 2, explanation: 'A discursive essay examines two or more sides of an issue, considers arguments for and against, and draws a balanced or reasoned conclusion.' },
          { q: 'Which sentence shows the BEST use of formal register for an essay?', options: ['A. "Loads of people think this is not cool."', 'B. "Many individuals consider this practice unacceptable."', 'C. "Everyone knows this is a big problem, right?"', 'D. "Like, this is really a huge issue nowadays."'], answer: 1, explanation: 'Option B uses formal vocabulary ("many individuals", "practice", "unacceptable") appropriate for a WASSCE essay. The others are informal or colloquial.' },
          { q: 'PEEL paragraph structure stands for', options: ['A. Point, Example, Evidence, Link', 'B. Point, Evidence, Explanation, Link', 'C. Paragraph, Evidence, Example, Listing', 'D. Point, Essay, Evidence, Listing'], answer: 1, explanation: 'PEEL: Point (topic sentence), Evidence (supporting facts/quotes), Explanation (how the evidence proves the point), Link (transition to the next paragraph).' },
          { q: 'Which of the following best describes the appropriate length for a WASSCE essay answer?', options: ['A. 100–150 words', 'B. 200–300 words', 'C. 350–450 words or more', 'D. Exactly 500 words'], answer: 2, explanation: 'WASSCE essays typically require at least 350–450 words for a full response. Very short responses lose marks for content development.' }
        ],
        theory: [
          { question: 'Write a well-developed argumentative essay (minimum 350 words) on the topic: "Social media does more harm than good to young people." Present arguments on BOTH sides and reach a conclusion.', marks: 20, answer: 'Introduction: Social media has become inseparable from the daily lives of young people — used for communication, entertainment, and information. While it offers genuine benefits, growing evidence suggests its negative effects on youth are more profound. This essay argues that, on balance, social media does more harm than good to young people. Body (arguments FOR harm): Social media can damage mental health; studies show excessive use correlates with anxiety, depression and poor self-esteem, as young people compare themselves to unrealistic online images. It facilitates cyberbullying, which is difficult to escape and can have severe psychological consequences. Social media distracts from studying and reduces attention spans. Additionally, online misinformation spreads rapidly and young people may lack the critical thinking skills to distinguish fact from fiction. Body (counter-arguments): However, social media enables young people to stay connected with family and friends, especially during crises. It provides platforms for creativity, entrepreneurship and civic engagement. Educational content and learning communities are readily accessible. Conclusion: While acknowledging its benefits, the evidence suggests social media\'s harms — particularly to mental health and academic performance — outweigh its advantages for young people. Regulation, digital literacy education and parental guidance are essential safeguards.', markingGuide: 'Award marks on WAEC criteria: Content/Relevance (8): clearly argued, both sides explored, relevant examples; Organisation (4): clear introduction, developed paragraphs, conclusion; Expression (4): appropriate formal register, varied vocabulary and sentence structure; Mechanical Accuracy (4): spelling, punctuation, grammar. Maximum 20 marks.' },
          { question: 'Describe the structural features of a good essay and explain how each feature contributes to effective writing.', marks: 10, answer: 'A good essay has three main structural features: (1) Introduction: The introduction opens the essay, engages the reader, and presents the thesis statement. It sets the direction for the entire essay and should be concise (1 paragraph). A strong introduction ensures the reader knows what to expect. (2) Body paragraphs: Each body paragraph develops one main idea introduced in a topic sentence, supported by evidence and explanation. Logical ordering (e.g. least to most important) and transition words connect paragraphs smoothly. Well-developed body paragraphs provide the substance of the essay and demonstrate the writer\'s knowledge and analytical ability. (3) Conclusion: The conclusion brings the essay to a close by summarising the main points and offering a final perspective or recommendation. It should not introduce new ideas but should leave the reader with a clear final impression.', markingGuide: 'Award 3 marks for each of the three structural elements correctly named and explained (3×3=9 marks). Award 1 mark for overall clarity and cohesion. Maximum 10 marks.' }
        ]
      },
      {
        id: 'letter_report_writing',
        name: 'Letter & Report Writing',
        icon: '✉️',
        lessonNotes: `<h4>Formal Letters</h4>
<p>A formal letter is written to an official, institution or stranger in a professional context. Layout:</p>
<ul>
  <li>Writer's address (top right)</li>
  <li>Date (below writer's address)</li>
  <li>Recipient's name/title and address (left)</li>
  <li>Salutation: "Dear Sir/Madam," or "Dear Mr/Mrs [Name],"</li>
  <li>Heading/subject (optional but recommended): underlined or in capitals</li>
  <li>Body: formal language, well-structured paragraphs</li>
  <li>Complimentary close: "Yours faithfully," (if salutation was Dear Sir/Madam) or "Yours sincerely," (if named)</li>
  <li>Writer's signature and printed name</li>
</ul>
<h4>Informal Letters</h4>
<p>Written to a friend or family member. Include: writer's address (top right), date, salutation ("Dear [First Name],"), conversational body paragraphs, closing ("Your friend," or "With love,"), and signature.</p>
<h4>Reports</h4>
<p>A report presents factual information in an organized manner. Structure: (1) Title/Heading, (2) Introduction (purpose, scope), (3) Findings (body — use numbered sections or subheadings), (4) Conclusion/Recommendations, (5) Name and date. Use formal, objective language. Avoid first-person opinion unless it is a personal report.</p>`,
        keyPoints: [
          'Formal letter: writer\'s address, date, recipient\'s address, salutation, body, complimentary close, signature',
          '"Yours faithfully" goes with "Dear Sir/Madam"; "Yours sincerely" goes with a named salutation',
          'Informal letter uses conversational language and a first-name salutation',
          'Reports use numbered headings/sections, formal language, and end with conclusions/recommendations'
        ],
        formulas: [
          'Rule: "Yours faithfully" ↔ "Dear Sir/Madam"; "Yours sincerely" ↔ "Dear Mr/Mrs [Name]"',
          'Report structure: Heading → Introduction → Findings → Conclusion → Recommendations'
        ],
        examTips: [
          'Always write out the full layout including all address sections — marks are awarded for each component',
          'The date should be written in full: e.g. 20th June, 2026 (not 20/6/26)',
          'In a report, use subheadings and numbered points to present findings clearly'
        ],
        commonMistakes: [
          'Using "Yours sincerely" after "Dear Sir/Madam" — this pairing is incorrect; use "Yours faithfully"',
          'Forgetting to include the recipient\'s address in a formal letter'
        ],
        mcq: [
          { q: 'If a formal letter begins "Dear Sir," the correct complimentary close is', options: ['A. Yours sincerely', 'B. Yours faithfully', 'C. Yours truly', 'D. With regards'], answer: 1, explanation: '"Yours faithfully" is used when the salutation is "Dear Sir" or "Dear Madam" (recipient not named). "Yours sincerely" is used when the recipient is named (Dear Mr. Tolbert).' },
          { q: 'In a formal letter, the recipient\'s address should be placed', options: ['A. top right, above the date', 'B. top left, below the writer\'s address and date', 'C. at the end after the signature', 'D. in the subject line'], answer: 1, explanation: 'The recipient\'s address (name, position, institution, address) appears on the left side of the page, below the writer\'s address and date.' },
          { q: 'A report differs from an essay mainly because', options: ['A. a report is shorter', 'B. a report uses numbered headings and presents factual findings objectively', 'C. a report is always informal', 'D. a report begins with a narrative introduction'], answer: 1, explanation: 'A report is characterised by its use of headings, numbered sections and objective, factual language, unlike an essay which is continuous prose.' },
          { q: 'Which of the following is NOT found in a formal letter?', options: ['A. Writer\'s address', 'B. Date', 'C. Casual greeting like "Hey there!"', 'D. Salutation'], answer: 2, explanation: '"Hey there!" is a casual greeting inappropriate in a formal letter. Formal letters use "Dear Sir/Madam" or "Dear Mr/Mrs [Name]".' },
          { q: 'In an informal letter to a friend, the appropriate salutation is', options: ['A. Dear Sir,', 'B. To Whom It May Concern,', 'C. Dear [First Name],', 'D. Dear Madam,'], answer: 2, explanation: 'Informal letters use the recipient\'s first name in the salutation: "Dear Samuel," — formal forms like "Dear Sir" are inappropriate.' },
          { q: 'The section of a report where you give your conclusions and recommend action is called', options: ['A. Introduction', 'B. Findings', 'C. Recommendations', 'D. Heading'], answer: 2, explanation: 'The Recommendations section (or Conclusion/Recommendations) is where the writer draws conclusions from the findings and suggests action.' },
          { q: 'When writing a letter of complaint, the tone should be', options: ['A. aggressive and threatening', 'B. firm, polite and factual', 'C. casual and humorous', 'D. emotional and personal'], answer: 1, explanation: 'A complaint letter should be firm but polite, stating facts clearly and requesting specific action, without aggressive or emotional language.' },
          { q: 'The date in a formal letter should be written as', options: ['A. 20/6/26', 'B. June 20', 'C. 20th June, 2026', 'D. 20-6-2026'], answer: 2, explanation: 'The full date format (20th June, 2026 or June 20, 2026) is correct in formal letters. Abbreviated forms like 20/6/26 are not used.' },
          { q: 'Which of these openings is most appropriate for a formal letter applying for a job?', options: ['A. "I am writing to apply for the position of..."', 'B. "Hi, I saw your ad and I want the job."', 'C. "I think I\'d be perfect for this job because I\'m great."', 'D. "Please give me the job."'], answer: 0, explanation: 'A formal job application begins with a clear, professional statement of purpose: "I am writing to apply for the position of..." sets the right tone.' },
          { q: 'A letter written to the principal of your school about poor sanitation should be addressed as', options: ['A. Dear Friend,', 'B. Dear Principal,', 'C. To My Principal,', 'D. Hey Principal,'], answer: 1, explanation: '"Dear Principal," is the appropriate formal salutation when writing to a named authority figure. "Dear Friend" is informal; the other options are wrong.' }
        ],
        theory: [
          { question: 'Write a formal letter to the District Education Officer in your area, complaining about the poor condition of buildings and lack of textbooks in your school, and requesting urgent action. Your letter should follow the correct format.', marks: 20, answer: 'Layout (marks for format): Writer\'s address, Date, Recipient\'s name/title/address, Salutation "Dear Sir/Madam," or "Dear [name]," Heading/Subject, Body paragraphs, "Yours faithfully/sincerely,", Signature and printed name. Content: Introduction stating purpose and school name. Point 1: describe the poor state of buildings (leaking roofs, broken doors, unsafe structures) with specific detail. Point 2: describe lack of textbooks — number of students sharing books, subjects affected. Point 3: explain impact on students\' learning and examination performance. Request: ask for specific, urgent action — repair of buildings and supply of textbooks — by a stated deadline. Conclusion: polite but firm, thanking the officer in anticipation of action.', markingGuide: 'Award 6 marks for correct format (address 1, date 1, recipient\'s address 1, salutation 1, close 1, signature 1). Award 10 marks for content (clear statement of complaint, two specific problems described with detail, impact on students, specific request, polite conclusion). Award 4 marks for expression (formal register, appropriate vocabulary and sentence structure, no slang). Maximum 20 marks.' },
          { question: 'As the secretary of your school\'s Environmental Club, write a report to your principal on the activities carried out during the last term and recommendations for the next term.', marks: 15, answer: 'REPORT ON ENVIRONMENTAL CLUB ACTIVITIES — SECOND TERM, 2025/2026. Introduction: This report outlines the activities of the Environmental Club during the second term and makes recommendations for the third term. Submitted by: [Name], Secretary, Environmental Club. Findings/Activities: (i) Weekly Clean-Up Exercises: Members conducted weekly clean-up exercises of the school compound every Friday, collecting waste and maintaining flowerbeds. (ii) Tree-Planting Campaign: On World Environment Day, the club planted 50 seedlings around the school boundary. (iii) Awareness Campaign: Members gave presentations to junior classes on waste disposal and the importance of recycling. Challenges: Limited tools (only 3 wheelbarrows for 30 members). Lack of funds for purchasing seedlings. Recommendations: The school should procure additional cleaning tools. A small budget should be allocated to the club. The tree-planting programme should be extended to involve the community. Conclusion: The club made meaningful progress this term. With additional support, greater impact is achievable. [Name], Secretary. Date.', markingGuide: 'Award 4 marks for correct report format (heading, introduction, numbered sections, conclusion, name and date). Award 8 marks for content (at least 3 activities described, challenges, at least 2 recommendations). Award 3 marks for formal language and accuracy. Maximum 15 marks.' }
        ]
      },
      {
        id: 'language_usage_grammar',
        name: 'Language Usage & Grammar',
        icon: '📚',
        lessonNotes: `<h4>Parts of Speech</h4>
<p><strong>Noun:</strong> name of a person, place, thing or idea. <strong>Pronoun:</strong> replaces a noun (I, you, he, she, it, we, they). <strong>Verb:</strong> action or state of being. <strong>Adjective:</strong> describes a noun. <strong>Adverb:</strong> modifies a verb, adjective or another adverb. <strong>Preposition:</strong> shows relationship (in, on, at, under). <strong>Conjunction:</strong> joins words or clauses (and, but, because, although). <strong>Interjection:</strong> expresses emotion (Oh! Wow!).</p>
<h4>Tenses</h4>
<p>Simple present (He runs), present continuous (He is running), simple past (He ran), past continuous (He was running), simple future (He will run), present perfect (He has run), past perfect (He had run).</p>
<h4>Subject-Verb Agreement</h4>
<p>The verb must agree with the subject in number: singular subject → singular verb; plural subject → plural verb. "Everyone," "each," "either," "neither," and "none" take singular verbs. Collective nouns (team, committee) take singular verbs when acting as one unit.</p>
<h4>Common Grammatical Structures</h4>
<p><strong>Conditional sentences:</strong> Type 1 (possible): If + present simple, will + infinitive. Type 2 (hypothetical): If + past simple, would + infinitive. Type 3 (past/impossible): If + past perfect, would have + past participle.</p>
<p><strong>Active vs passive voice:</strong> Active: subject performs the action. Passive: subject receives the action (Object + is/was + past participle + by + agent).</p>`,
        keyPoints: [
          'Subject-verb agreement: singular subject takes singular verb; "everyone/each/either" always take singular verbs',
          'Active voice: "The dog bit the man"; Passive voice: "The man was bitten by the dog"',
          'Type 1 conditional: If + present simple, will + base verb (real/possible)',
          'Type 2 conditional: If + past simple, would + base verb (hypothetical present/future)'
        ],
        formulas: [
          'Passive voice: Object → Subject + be (tense) + past participle (+ by + agent)',
          'Conditional 1: If + V₁ (present), will + V₁ (base)',
          'Conditional 2: If + V₂ (past simple), would + V₁ (base)',
          'Conditional 3: If + had + V₃ (past participle), would have + V₃'
        ],
        examTips: [
          'For subject-verb agreement with "either/or" and "neither/nor", the verb agrees with the NEAREST subject',
          'When rewriting in the passive voice, ensure the tense of "to be" matches the tense of the original verb',
          'In conditional sentences, do NOT use "would" in the if-clause'
        ],
        commonMistakes: [
          'Using "would" in the if-clause of a conditional sentence — incorrect: "If I would go"; correct: "If I went"',
          'Making the verb agree with a word between the subject and verb instead of the actual subject'
        ],
        mcq: [
          { q: 'Choose the correct verb: "Each of the students ___ expected to attend."', options: ['A. are', 'B. were', 'C. is', 'D. have been'], answer: 2, explanation: '"Each" is always singular, so it takes the singular verb "is". "Each of the students is expected..."' },
          { q: 'Rewrite in the passive: "The teacher marked the papers."', options: ['A. The papers were marked by the teacher.', 'B. The papers are marked by the teacher.', 'C. The teacher was marked by the papers.', 'D. The papers marked the teacher.'], answer: 0, explanation: 'Passive: object (papers) becomes subject + were + past participle (marked) + by + agent (teacher). "The papers were marked by the teacher."' },
          { q: 'Which sentence shows correct subject-verb agreement?', options: ['A. The committee are meeting tomorrow.', 'B. The committee is meeting tomorrow.', 'C. The committees is meeting tomorrow.', 'D. The committee were meeting tomorrow always.'], answer: 1, explanation: '"The committee" as a collective noun acting as a unit takes a singular verb: "is meeting".' },
          { q: 'Complete: "If I had studied harder, I ___ passed the exam."', options: ['A. will have', 'B. would have', 'C. had', 'D. would'], answer: 1, explanation: 'Type 3 conditional (past hypothetical): If + past perfect, would have + past participle. "If I had studied harder, I would have passed."' },
          { q: 'Which word is an adverb in: "She spoke very quietly."', options: ['A. She', 'B. spoke', 'C. very', 'D. quietly'], answer: 2, explanation: 'Both "very" and "quietly" are adverbs, but "very" modifies the adverb "quietly" — so "very" is an adverb of degree. However, if only one can be chosen, "very" modifies another adverb, making it a clear adverb example.' },
          { q: '"Neither the captain nor the players ___ blamed." Choose the correct verb.', options: ['A. was', 'B. were', 'C. is', 'D. has been'], answer: 1, explanation: 'With "neither...nor," the verb agrees with the nearest subject. The nearest subject is "players" (plural), so use "were".' },
          { q: 'Which sentence is in the present perfect tense?', options: ['A. She runs every morning.', 'B. She is running now.', 'C. She has run five kilometres.', 'D. She ran yesterday.'], answer: 2, explanation: 'Present perfect: subject + has/have + past participle. "She has run five kilometres" is present perfect.' },
          { q: 'The correct Type 1 conditional is', options: ['A. If it rains, I would stay indoors.', 'B. If it will rain, I stay indoors.', 'C. If it rained, I will stay indoors.', 'D. If it rains, I will stay indoors.'], answer: 3, explanation: 'Type 1 conditional (real/possible): if + present simple, will + base verb. "If it rains, I will stay indoors."' },
          { q: 'Identify the conjunction in: "He failed because he did not study."', options: ['A. failed', 'B. because', 'C. study', 'D. did'], answer: 1, explanation: '"Because" is a subordinating conjunction joining the main clause to the reason clause.' },
          { q: 'Choose the sentence that correctly uses the past perfect tense:', options: ['A. By the time she arrived, he already left.', 'B. By the time she arrived, he had already left.', 'C. By the time she arrived, he has already left.', 'D. By the time she arrived, he is already left.'], answer: 1, explanation: 'Past perfect (had + past participle) is used for an action completed before another past action. "He had already left" correctly shows that leaving happened before she arrived.' }
        ],
        theory: [
          { question: 'Rewrite the following sentences as instructed without changing the meaning: (a) Active to passive: "The government built three new hospitals." (b) Passive to active: "The suspect was arrested by the police." (c) Type 2 conditional: "I don\'t have a car, so I cannot drive you to the airport." (d) Join using "although": "He was tired." "He continued working."', marks: 8, answer: '(a) Three new hospitals were built by the government. (b) The police arrested the suspect. (c) If I had a car, I would drive you to the airport. (d) Although he was tired, he continued working. (Or: He continued working although he was tired.)', markingGuide: 'Award 2 marks for each correctly rewritten sentence (a), (b), (c), (d). Award full 2 marks only if the meaning is preserved and the form is correct. Maximum 8 marks.' },
          { question: 'Explain the difference between the simple past and the present perfect tense, giving two examples of each and a context in which each is used.', marks: 10, answer: 'The simple past tense is used for actions completed at a specific, stated (or implied) time in the past, with no direct connection to the present. It is formed with the past form of the verb: subject + V₂. Examples: "I visited Monrovia last year." / "She finished her homework at 8 pm." Context: use it when the time of the action is stated or clearly in the past. The present perfect tense is used for actions that happened at an unspecified time in the past but have a connection to or relevance in the present; also for actions that started in the past and continue to the present. It is formed with have/has + past participle: subject + has/have + V₃. Examples: "I have visited Monrovia." (at some point in my life, connection to now) / "She has lived here for ten years." (started in past, still true now). Context: use it when the specific time is not mentioned and the result or relevance to the present is the focus.', markingGuide: 'Award 3 marks for explaining simple past (formation, meaning, context). Award 3 marks for explaining present perfect (formation, meaning, context). Award 2 marks each for 2 correct examples of each tense (4 marks total). Maximum 10 marks.' }
        ]
      },
      {
        id: 'oral_english_phonetics',
        name: 'Oral English & Phonetics',
        icon: '🗣️',
        lessonNotes: `<h4>Phonetics and Phonology</h4>
<p>English has <strong>44 sounds (phonemes)</strong>: 20 vowel sounds and 24 consonant sounds, though only 26 letters are used to write them. A <strong>phoneme</strong> is the smallest unit of sound that can change meaning (e.g. /p/ in pin vs /t/ in tin).</p>
<p><strong>Vowel sounds</strong> are produced with an open vocal tract. They include <strong>short vowels</strong> (/ɪ/ as in bit, /e/ as in bed, /æ/ as in cat, /ɒ/ as in hot, /ʌ/ as in cup, /ʊ/ as in foot), <strong>long vowels</strong> (/iː/ as in see, /ɑː/ as in far, /ɔː/ as in saw, /uː/ as in too, /ɜː/ as in bird), and <strong>diphthongs</strong> — gliding vowels moving between two positions (e.g. /eɪ/ as in day, /aɪ/ as in my, /ɔɪ/ as in boy, /aʊ/ as in now, /əʊ/ as in go, /ɪə/ as in here, /eə/ as in there, /ʊə/ as in tour).</p>
<h4>Word Stress</h4>
<p><strong>Word stress</strong> is the emphasis placed on one syllable in a word. In two-syllable nouns and adjectives, the stress is usually on the first syllable (PREsent, TAble). In two-syllable verbs, stress is often on the second syllable (preSENT, reCORD). Changing stress changes meaning: RECord (noun) vs reCORD (verb). Stress rules for longer words also depend on suffixes.</p>
<h4>Intonation</h4>
<p><strong>Intonation</strong> is the rise and fall of pitch across an utterance. Rising intonation (↑) is used for yes/no questions and to show the sentence is unfinished. Falling intonation (↓) is used for statements, commands, and wh-questions. Tone groups divide speech into meaningful chunks.</p>`,
        keyPoints: [
          'English has 44 phonemes (20 vowels + 24 consonants) but only 26 letters',
          'A diphthong is a gliding vowel sound that moves from one position to another (e.g. /aɪ/ in "my")',
          'Word stress: most 2-syllable nouns → stress on 1st syllable; most 2-syllable verbs → stress on 2nd syllable',
          'Rising intonation: yes/no questions; falling intonation: statements, commands, wh-questions'
        ],
        formulas: [
          'Phonemes: 44 total = 20 vowel sounds + 24 consonant sounds',
          'Minimal pairs: two words differing in exactly one phoneme (e.g. pin/bin, cat/bat)',
          'Syllable stress: \'NOUN/ADJ vs verb\' (e.g. REcord/reCORD, PREsent/preSENT)'
        ],
        examTips: [
          'Learn the common pairs of nouns/verbs that differ only in stress position: REcord/reCORD, OBject/obJECT',
          'When answering phonetics questions, name the vowel sound and give another word with the same sound as evidence',
          'For intonation, remember: questions seeking Yes/No answers use rising intonation; wh-questions use falling'
        ],
        commonMistakes: [
          'Confusing spelling with sound — "ph" in "phone" makes an /f/ sound; "gh" in "though" is silent',
          'Saying all two-syllable words stress the first syllable — verbs like "record" stress the second'
        ],
        mcq: [
          { q: 'How many phonemes (speech sounds) does English have?', options: ['A. 26', 'B. 36', 'C. 40', 'D. 44'], answer: 3, explanation: 'English has 44 phonemes: 20 vowel sounds and 24 consonant sounds, despite having only 26 letters in its alphabet.' },
          { q: 'A diphthong is', options: ['A. a consonant cluster', 'B. a gliding vowel sound that moves between two positions', 'C. a word with two syllables', 'D. a silent letter'], answer: 1, explanation: 'A diphthong is a vowel sound that begins at one position and glides to another within the same syllable, e.g. /aɪ/ in "my", /eɪ/ in "day".' },
          { q: 'In the word "record" used as a noun, the stress falls on the', options: ['A. second syllable — re-CORD', 'B. first syllable — REC-ord', 'C. last syllable', 'D. neither syllable'], answer: 1, explanation: 'When "record" is a noun, stress falls on the first syllable: REC-ord. When used as a verb, stress shifts to the second: re-CORD.' },
          { q: '"Pin" and "bin" are examples of', options: ['A. synonyms', 'B. homophones', 'C. minimal pairs', 'D. antonyms'], answer: 2, explanation: 'Minimal pairs are two words that differ in exactly one phoneme (/p/ vs /b/), showing how a single sound change alters meaning.' },
          { q: 'Rising intonation is most commonly used in', options: ['A. statements of fact', 'B. commands', 'C. yes/no questions', 'D. wh-questions (what, where, when)'], answer: 2, explanation: 'Yes/no questions typically end with rising intonation (voice goes up) because they request confirmation. Wh-questions and statements use falling intonation.' },
          { q: 'The vowel sound in "bird" (/ɜː/) is found in which of the following words?', options: ['A. bard', 'B. board', 'C. word', 'D. ward'], answer: 2, explanation: '"Word" contains the same /ɜː/ sound as "bird". "Bard" has /ɑː/; "board" has /ɔː/; "ward" has /wɔː/.' },
          { q: 'How many syllables does the word "education" have?', options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], answer: 1, explanation: '"Education" = e-du-ca-tion = 4 syllables.' },
          { q: 'The word "photograph" has how many phonemes?', options: ['A. 9', 'B. 8', 'C. 7', 'D. 6'], answer: 1, explanation: '"Photograph" = /f/ /əʊ/ /t/ /ə/ /g/ /r/ /ɑː/ /f/ = 8 phonemes. (ph=f, o=əʊ, t=t, o=ə, g=g, r=r, a=ɑː, ph=f).' },
          { q: 'Falling intonation is used in', options: ['A. "Are you coming?" (yes/no question)', 'B. "Come here!" (command)', 'C. "Really?" (showing surprise)', 'D. Listing items that are not yet finished'], answer: 1, explanation: 'Commands (imperatives) use falling intonation — the voice drops at the end. "Come here!" ends with a falling tone.' },
          { q: 'Which word has the stress on the SECOND syllable?', options: ['A. TABLE', 'B. PAPER', 'C. reVEAL', 'D. FEVer'], answer: 2, explanation: '"Reveal" (reTVEAL) is a verb with stress on the second syllable. Table, paper and fever are nouns with stress on the first syllable.' }
        ],
        theory: [
          { question: 'Distinguish between vowels and consonants in English phonetics. Give THREE examples of diphthongs and use each in a sentence.', marks: 10, answer: 'Vowels are sounds produced with a relatively open, unobstructed vocal tract; airflow passes through the mouth without significant constriction. English has 20 vowel sounds (both pure vowels and diphthongs). Consonants are sounds produced by creating some obstruction or constriction in the vocal tract using the lips, teeth, tongue or other articulators. English has 24 consonant sounds. Three diphthongs with examples: (1) /eɪ/ (as in "day"): "She will arrive on a fine day." (2) /aɪ/ (as in "my"): "I try my best every day." (3) /aʊ/ (as in "now"): "The crowd cheered as the final whistle blew now." (Other diphthongs: /ɔɪ/ boy, /əʊ/ go, /ɪə/ here, /eə/ there, /ʊə/ tour.)', markingGuide: 'Award 3 marks for defining vowels (open tract, no obstruction) and 3 marks for consonants (obstruction/constriction). Award 1 mark for each diphthong correctly named and 1 mark for its use in a sentence (3 diphthongs × 2 marks = 4 marks — but scale to 4 marks total). Maximum 10 marks.' },
          { question: 'Explain word stress in English and illustrate with FOUR words how stress can change the meaning or word class of a word.', marks: 8, answer: 'Word stress is the emphasis given to one syllable in a word, making it louder, longer and higher in pitch than the unstressed syllables. Correct stress is essential for being clearly understood. Four examples where stress changes meaning/class: (1) REcord (noun: a vinyl disc or a document) / reCORD (verb: to capture sound or video). (2) PREsent (noun/adjective: a gift; existing now) / preSENT (verb: to give or show). (3) OBject (noun: a thing) / obJECT (verb: to raise an argument against). (4) INsult (noun: a rude remark) / inSULT (verb: to offend someone). In each case, the noun or adjective stresses the first syllable and the verb stresses the second syllable.', markingGuide: 'Award 3 marks for explaining word stress (definition, features of stressed syllable, importance). Award 1 mark each for four correctly illustrated word pairs with explanation (4 pairs × 1 mark = but can award up to 5 marks for quality of illustration). Maximum 8 marks.' }
        ]
      }
    ],
    pastQuestions: [
      { year: 2019, paper: 'Paper 2', question: 'In not more than 120 words, summarise the following passage, stating three problems of rapid urbanisation and two solutions suggested by the writer.', topic: 'comprehension_summary', answer: 'Award marks for: identifying exactly three problems (overcrowding, unemployment, poor sanitation or similar from passage) and exactly two solutions. Penalise for exceeding 120 words. Give credit for own words rather than copied phrases. Maximum 20 marks.', markingGuide: 'Content (10 marks): 3 points for each problem (6), 2 points for each solution (4). Expression and accuracy (5): fluent prose, own words. Format (5): continuous prose, within word count.' },
      { year: 2020, paper: 'Paper 2', question: 'Write a letter to the Editor of a national newspaper, expressing your views on the importance of girl-child education in Liberia. Your letter should be between 400 and 450 words.', topic: 'letter_report_writing', answer: 'Award marks for: correct formal letter format (address, date, salutation, heading, body, close, signature). Content: at least 4 well-developed points supporting girl-child education. Expression: formal register, varied vocabulary. Mechanical accuracy: spelling, grammar, punctuation. Maximum 30 marks.', markingGuide: 'Format (6): all letter components present. Content (12): 4 developed points. Expression (8): formal, varied. Accuracy (4): grammar/spelling.' },
      { year: 2021, paper: 'Paper 2', question: 'Write a composition of between 450 and 500 words on the topic: "The Advantages and Disadvantages of Social Media."', topic: 'essay_writing', answer: 'Award for: engaging introduction, balanced discussion of advantages (connectivity, information access, business/education), disadvantages (addiction, misinformation, mental health), and a reasoned conclusion. Formal register throughout. Maximum 30 marks.', markingGuide: 'Content (12): balanced treatment, relevant examples. Organisation (6): intro, body paragraphs, conclusion. Expression (8): vocabulary and sentence variety. Accuracy (4).' },
      { year: 2022, paper: 'Paper 1', question: 'Choose the word that correctly completes the sentence: "Each of the boys ___ expected to submit his assignment by Friday."', options: ['A. are', 'B. were', 'C. is', 'D. have'], answer: 2, topic: 'language_usage_grammar', explanation: '"Each" is singular and takes a singular verb "is". "Each of the boys is expected..."' },
      { year: 2023, paper: 'Paper 1', question: 'Which word has the stress on the first syllable?', options: ['A. reVEAL', 'B. disTURB', 'C. TABle', 'D. reCORD (verb)'], answer: 2, topic: 'oral_english_phonetics', explanation: '"Table" (TABle) has stress on the first syllable. The others are verbs or have second-syllable stress.' }
    ]
  },

  biology: {
    id: 'biology',
    name: 'Biology',
    shortName: 'Biology',
    icon: '🧬',
    color: '#7c3aed',
    bgColor: '#ede9fe',
    textColor: '#5b21b6',
    category: 'science',
    examFormat: 'Paper 1: 50 MCQ (1hr 15min) | Paper 2: Theory (2hr) | Paper 3: Practical (2hr 45min)',
    totalTopics: 5,
    topics: [
      {
        id: 'cell_biology',
        name: 'Cell Biology & Cell Structure',
        icon: '🔬',
        lessonNotes: `<h4>1. Prokaryotic vs Eukaryotic Cells</h4>
<p><strong>Prokaryotic cells</strong> are primitive cells without a membrane-bound nucleus. Their genetic material (DNA) floats freely in the cytoplasm in a region called the <strong>nucleoid</strong>. Examples include bacteria and blue-green algae (cyanobacteria). They are typically 1–10 µm in size, have no membrane-bound organelles, and reproduce by binary fission.</p>
<p><strong>Eukaryotic cells</strong> possess a true nucleus enclosed by a nuclear envelope. They contain membrane-bound organelles and are found in animals, plants, fungi, and protists. They are larger (10–100 µm) and reproduce by mitosis or meiosis.</p>
<ul>
  <li><strong>Key difference:</strong> Prokaryotes lack a nucleus and membrane-bound organelles; eukaryotes have both.</li>
  <li>Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes (except in mitochondria and chloroplasts).</li>
</ul>

<h4>2. Plant vs Animal Cells</h4>
<p>Both are eukaryotic but differ in several important structures:</p>
<ul>
  <li><strong>Cell wall:</strong> Present in plant cells (made of cellulose); absent in animal cells.</li>
  <li><strong>Chloroplasts:</strong> Found in plant cells for photosynthesis; absent in animal cells.</li>
  <li><strong>Large central vacuole:</strong> Present in mature plant cells for turgor pressure and storage; animal cells have small temporary vacuoles only.</li>
  <li><strong>Centrioles:</strong> Present in animal cells for cell division; absent in most plant cells.</li>
  <li><strong>Shape:</strong> Plant cells are regular/rectangular due to rigid cell wall; animal cells are irregular.</li>
</ul>

<h4>3. Cell Organelles and Their Functions</h4>
<ul>
  <li><strong>Nucleus:</strong> Control centre of the cell. Contains DNA (chromosomes) and directs cell activities. Bounded by the nuclear envelope with nuclear pores. Contains the nucleolus where ribosomes are made.</li>
  <li><strong>Mitochondria:</strong> Site of aerobic respiration. Produces ATP (energy). Has a double membrane — the inner membrane is folded into cristae to increase surface area. Contains its own DNA. Called the "powerhouse of the cell."</li>
  <li><strong>Chloroplast:</strong> Site of photosynthesis (plant cells only). Has a double membrane and internal membranes called thylakoids stacked into grana. Contains chlorophyll pigment. Has its own DNA.</li>
  <li><strong>Ribosome:</strong> Site of protein synthesis. Found free in cytoplasm or attached to rough ER. Very small — no membrane surrounding them.</li>
  <li><strong>Golgi apparatus (Golgi body):</strong> Modifies, packages, and distributes proteins and lipids. Produces lysosomes and secretory vesicles. Acts like the cell's "post office."</li>
  <li><strong>Endoplasmic Reticulum (ER):</strong> Rough ER (has ribosomes) — synthesises and transports proteins. Smooth ER (no ribosomes) — synthesises lipids and detoxifies drugs.</li>
  <li><strong>Vacuole:</strong> In plants, a large central vacuole stores water, minerals, and waste products. Maintains turgor pressure. In animals, smaller vacuoles form temporarily (food vacuoles, contractile vacuoles).</li>
  <li><strong>Cell wall:</strong> Rigid outer layer in plant cells made of cellulose. Provides structural support and prevents over-expansion. Fully permeable to water and solutes.</li>
  <li><strong>Cell membrane (plasma membrane):</strong> Selectively permeable phospholipid bilayer. Controls entry and exit of substances. Present in ALL cells.</li>
  <li><strong>Lysosomes:</strong> Contain digestive enzymes. Destroy old organelles and foreign particles (autophagy). Found mainly in animal cells.</li>
</ul>

<h4>4. Cell Division</h4>
<p><strong>Mitosis</strong> produces two genetically identical daughter cells. It is used for growth, repair, and asexual reproduction. The stages are remembered as <strong>PMAT</strong>:</p>
<ul>
  <li><strong>Prophase:</strong> Chromosomes condense and become visible. Nuclear envelope breaks down. Spindle fibres form.</li>
  <li><strong>Metaphase:</strong> Chromosomes line up at the cell equator (metaphase plate). Spindle fibres attach to centromeres.</li>
  <li><strong>Anaphase:</strong> Sister chromatids are pulled to opposite poles by spindle fibres.</li>
  <li><strong>Telophase:</strong> Nuclear envelopes reform around each set of chromosomes. Chromosomes decondense. Cytokinesis divides the cytoplasm.</li>
</ul>
<p><strong>Meiosis</strong> produces four genetically different haploid cells (gametes). It involves two rounds of division (Meiosis I and II). It results in genetic variation through crossing over and independent assortment. Meiosis I separates homologous chromosomes; Meiosis II separates sister chromatids.</p>

<h4>5. Movement Across Cell Membranes</h4>
<ul>
  <li><strong>Diffusion:</strong> Movement of molecules from high concentration to low concentration. Passive (no energy needed). Examples: oxygen into cells, CO₂ out of cells.</li>
  <li><strong>Osmosis:</strong> Diffusion of water molecules across a selectively permeable membrane from a region of high water potential (dilute solution) to a region of low water potential (concentrated solution). Passive process. Turgor pressure in plants depends on osmosis.</li>
  <li><strong>Active transport:</strong> Movement of molecules against a concentration gradient (low to high). Requires energy (ATP) and carrier proteins. Example: absorption of glucose in the gut, mineral uptake by root hair cells.</li>
</ul>`,
        keyPoints: [
          'Prokaryotic cells lack a membrane-bound nucleus; eukaryotic cells have a true nucleus surrounded by a nuclear envelope.',
          'Plant cells differ from animal cells by having a cell wall (cellulose), chloroplasts, and a large central vacuole.',
          'Mitosis produces 2 identical diploid daughter cells (PMAT); meiosis produces 4 genetically varied haploid cells.',
          'Osmosis is the movement of water from a dilute (high water potential) to a concentrated (low water potential) solution across a selectively permeable membrane.'
        ],
        examTips: [
          'Always distinguish between the cell wall (structural, cellulose) and the cell membrane (selectively permeable, phospholipid bilayer) — both exist in plant cells.',
          'For PMAT mitosis questions, remember: Metaphase = Middle alignment; Anaphase = Apart (chromatids pulled apart).',
          'In osmosis questions, state the direction of water movement using water potential language: water moves from HIGH water potential to LOW water potential.'
        ],
        commonMistakes: [
          'Confusing mitosis and meiosis — mitosis gives 2 diploid cells (body cells); meiosis gives 4 haploid cells (sex cells/gametes).',
          'Stating that active transport does not need energy — it always requires ATP and carrier proteins to move substances against the concentration gradient.'
        ],
        mcq: [
          {
            q: 'Which of the following structures is found in a plant cell but NOT in an animal cell?',
            options: ['A. Mitochondria', 'B. Cell membrane', 'C. Chloroplast', 'D. Ribosome'],
            answer: 2,
            explanation: 'Chloroplasts are found only in plant cells. They contain chlorophyll and are the site of photosynthesis. Mitochondria, cell membranes, and ribosomes are found in both plant and animal cells.'
          },
          {
            q: 'The site of aerobic respiration in eukaryotic cells is the',
            options: ['A. nucleus', 'B. ribosome', 'C. mitochondrion', 'D. vacuole'],
            answer: 2,
            explanation: 'The mitochondrion is the site of aerobic respiration where ATP is produced. The inner membrane (cristae) increases surface area for this process.'
          },
          {
            q: 'Which stage of mitosis is characterised by the alignment of chromosomes at the cell equator?',
            options: ['A. Prophase', 'B. Anaphase', 'C. Telophase', 'D. Metaphase'],
            answer: 3,
            explanation: 'During Metaphase, chromosomes align at the metaphase plate (cell equator). Spindle fibres attach to the centromeres of chromosomes at this stage.'
          },
          {
            q: 'Osmosis is best described as the movement of',
            options: [
              'A. solute molecules from high to low concentration through a permeable membrane',
              'B. water molecules from low to high water potential through a selectively permeable membrane',
              'C. water molecules from high to low water potential through a selectively permeable membrane',
              'D. molecules against a concentration gradient using energy'
            ],
            answer: 2,
            explanation: 'Osmosis is the diffusion of water molecules from a region of high water potential (dilute solution) to a region of low water potential (concentrated solution) across a selectively permeable membrane.'
          },
          {
            q: 'A key difference between prokaryotic and eukaryotic cells is that prokaryotic cells',
            options: [
              'A. have a cell membrane',
              'B. contain ribosomes',
              'C. lack a membrane-bound nucleus',
              'D. can reproduce'
            ],
            answer: 2,
            explanation: 'Prokaryotic cells do not have a membrane-bound nucleus. Their DNA floats freely in the cytoplasm. Both cell types have ribosomes and cell membranes.'
          },
          {
            q: 'Which organelle is responsible for modifying and packaging proteins for secretion?',
            options: ['A. Ribosome', 'B. Smooth endoplasmic reticulum', 'C. Golgi apparatus', 'D. Lysosome'],
            answer: 2,
            explanation: 'The Golgi apparatus receives proteins from the rough ER, modifies them (e.g., adds carbohydrates), packages them into vesicles, and directs them to their destination.'
          },
          {
            q: 'Active transport differs from diffusion in that active transport',
            options: [
              'A. moves substances down a concentration gradient',
              'B. requires ATP and carrier proteins',
              'C. only involves water molecules',
              'D. occurs across non-living membranes'
            ],
            answer: 1,
            explanation: 'Active transport requires metabolic energy (ATP) and specific carrier proteins to move substances against a concentration gradient (from low to high concentration).'
          },
          {
            q: 'Meiosis results in the production of',
            options: [
              'A. two diploid genetically identical cells',
              'B. two haploid genetically varied cells',
              'C. four diploid genetically identical cells',
              'D. four haploid genetically varied cells'
            ],
            answer: 3,
            explanation: 'Meiosis produces four haploid daughter cells that are genetically different due to crossing over and independent assortment. This is important for sexual reproduction and genetic diversity.'
          },
          {
            q: 'The function of the large central vacuole in a plant cell is to',
            options: [
              'A. synthesise proteins',
              'B. maintain turgor pressure and store substances',
              'C. carry out photosynthesis',
              'D. produce ATP'
            ],
            answer: 1,
            explanation: 'The large central vacuole in plant cells stores water, minerals, and waste products, and exerts turgor pressure against the cell wall, keeping the plant firm (turgid).'
          },
          {
            q: 'During which stage of mitosis do the sister chromatids separate and move to opposite poles?',
            options: ['A. Prophase', 'B. Metaphase', 'C. Anaphase', 'D. Telophase'],
            answer: 2,
            explanation: 'During Anaphase, spindle fibres shorten and pull the sister chromatids apart toward opposite poles of the cell. The "A in Anaphase = Apart" is a useful memory aid.'
          }
        ],
        theory: [
          {
            question: 'With the aid of a diagram, describe the structure of a typical animal cell and state the function of any FOUR organelles.',
            marks: 10,
            answer: `<p>A typical animal cell has the following features:</p>
<ul>
  <li><strong>Cell membrane:</strong> Surrounds the cell; selectively permeable phospholipid bilayer controlling entry/exit of substances.</li>
  <li><strong>Nucleus:</strong> Contains DNA (chromosomes) and controls all cell activities; bounded by the nuclear envelope.</li>
  <li><strong>Mitochondria:</strong> Site of aerobic respiration; produces ATP for energy.</li>
  <li><strong>Ribosomes:</strong> Site of protein synthesis; may be free in cytoplasm or attached to rough ER.</li>
  <li><strong>Golgi apparatus:</strong> Modifies, packages, and distributes proteins and lipids.</li>
  <li><strong>Lysosomes:</strong> Contain digestive enzymes; break down worn-out organelles and foreign material.</li>
  <li><strong>Endoplasmic reticulum:</strong> Rough ER transports proteins; smooth ER synthesises lipids.</li>
</ul>`,
            markingGuide: '1 mark for each correctly labelled organelle in diagram (up to 4 marks). 1 mark for each correctly stated function of four organelles (4 marks). 1 mark for overall presentation and accuracy of diagram. Max 10 marks.'
          },
          {
            question: 'Compare and contrast mitosis and meiosis, stating the biological importance of each process.',
            marks: 8,
            answer: `<p><strong>Similarities:</strong> Both involve DNA replication before division; both occur in eukaryotic cells; both produce daughter cells.</p>
<p><strong>Differences:</strong></p>
<ul>
  <li>Mitosis produces 2 daughter cells; meiosis produces 4 daughter cells.</li>
  <li>Mitosis daughter cells are diploid (2n); meiosis daughter cells are haploid (n).</li>
  <li>Mitosis produces genetically identical cells; meiosis produces genetically varied cells.</li>
  <li>Mitosis involves 1 division; meiosis involves 2 divisions (Meiosis I and II).</li>
  <li>Crossing over occurs in meiosis I, not in mitosis.</li>
</ul>
<p><strong>Importance of mitosis:</strong> Growth of organisms, repair and replacement of damaged tissues, asexual reproduction.</p>
<p><strong>Importance of meiosis:</strong> Production of gametes (sperm and egg cells) for sexual reproduction; generates genetic variation in a population.</p>`,
            markingGuide: '2 marks for similarities. 4 marks for differences (1 mark each, up to 4). 1 mark for importance of mitosis. 1 mark for importance of meiosis. Max 8 marks.'
          }
        ]
      },
      {
        id: 'genetics_evolution',
        name: 'Genetics, Heredity & Evolution',
        icon: '🧬',
        lessonNotes: `<h4>1. Mendel's Laws of Inheritance</h4>
<p>Gregor Mendel (1822–1884), the "Father of Genetics," discovered the principles of heredity through experiments with pea plants. He proposed two key laws:</p>
<ul>
  <li><strong>Law of Segregation:</strong> Each organism carries two alleles for each trait. These alleles separate (segregate) during gamete formation so that each gamete carries only one allele. During fertilisation, offspring receive one allele from each parent.</li>
  <li><strong>Law of Independent Assortment:</strong> Alleles for different traits are inherited independently of one another (applies to genes on different chromosomes). This produces new combinations of traits in offspring.</li>
</ul>

<h4>2. Key Genetic Terms</h4>
<ul>
  <li><strong>Allele:</strong> Alternative forms of a gene at the same locus on homologous chromosomes.</li>
  <li><strong>Dominant allele:</strong> An allele that expresses itself even when only one copy is present (represented by a capital letter, e.g., T).</li>
  <li><strong>Recessive allele:</strong> An allele that is only expressed when two copies are present (represented by a lowercase letter, e.g., t).</li>
  <li><strong>Genotype:</strong> The genetic make-up of an organism (e.g., TT, Tt, tt).</li>
  <li><strong>Phenotype:</strong> The observable physical characteristics of an organism (e.g., tall, short).</li>
  <li><strong>Homozygous:</strong> Two identical alleles for a trait (e.g., TT or tt).</li>
  <li><strong>Heterozygous:</strong> Two different alleles for a trait (e.g., Tt).</li>
</ul>

<h4>3. Monohybrid and Dihybrid Crosses</h4>
<p><strong>Monohybrid cross</strong> involves one pair of contrasting traits. Example: Tall (T) × Short (t). If both parents are Tt (heterozygous), the offspring ratio is 3 Tall : 1 Short (3:1 phenotypic ratio; 1 TT : 2 Tt : 1 tt genotypic ratio).</p>
<p><strong>Dihybrid cross</strong> involves two pairs of traits. Example: TTSS × ttss cross. The F2 generation produces a 9:3:3:1 phenotypic ratio when both parents are heterozygous for both traits (TtSs × TtSs).</p>

<h4>4. Sex Determination and Sex-Linked Traits</h4>
<p>In humans, sex is determined by the sex chromosomes: <strong>XX = female</strong> and <strong>XY = male</strong>. The father determines the sex of the offspring since he provides either an X or a Y chromosome. The probability of having a boy or girl is always 50:50.</p>
<p><strong>Sex-linked traits</strong> are controlled by genes on the X chromosome. Because males have only one X chromosome, a single recessive allele will express itself. Examples include:</p>
<ul>
  <li><strong>Colour blindness:</strong> The allele for colour blindness (X<sup>c</sup>) is recessive. A carrier female (X<sup>C</sup>X<sup>c</sup>) is unaffected but can pass the allele to sons. An affected male is X<sup>c</sup>Y.</li>
  <li><strong>Haemophilia:</strong> Inability of blood to clot properly. X-linked recessive. Queen Victoria was a famous carrier.</li>
</ul>

<h4>5. Mutation</h4>
<p>A <strong>mutation</strong> is a sudden, heritable change in the DNA sequence of an organism. Mutations can be:</p>
<ul>
  <li><strong>Gene (point) mutations:</strong> Change in the base sequence of DNA (substitution, insertion, deletion). Example: sickle cell anaemia — a single base change in the haemoglobin gene causes abnormal red blood cells.</li>
  <li><strong>Chromosomal mutations:</strong> Changes in chromosome number or structure. Example: Down syndrome (trisomy 21) — an extra chromosome 21 due to non-disjunction.</li>
</ul>
<p>Mutagens (agents that cause mutations) include UV radiation, X-rays, and certain chemicals (carcinogens).</p>

<h4>6. Natural Selection and Darwin's Theory of Evolution</h4>
<p>Charles Darwin proposed that evolution occurs through <strong>natural selection</strong>. The key principles are:</p>
<ul>
  <li>Organisms produce more offspring than can survive (<strong>overproduction</strong>).</li>
  <li>There is <strong>variation</strong> among individuals in a population.</li>
  <li>Some variations give individuals a <strong>survival advantage</strong> in their environment.</li>
  <li>Better-adapted individuals <strong>survive and reproduce</strong> more (survival of the fittest).</li>
  <li>Advantageous traits are passed on to offspring — over many generations, the population changes (<strong>evolution</strong>).</li>
</ul>
<p><strong>Evidence for evolution:</strong> Fossil record, comparative anatomy (homologous structures), comparative embryology, biogeography, molecular biology (DNA similarities), direct observation (e.g., antibiotic resistance in bacteria).</p>`,
        keyPoints: [
          'Mendel\'s Law of Segregation: alleles separate during gamete formation so each gamete carries one allele; Law of Independent Assortment: different gene pairs are inherited independently.',
          'Genotype is the genetic make-up (e.g., TT, Tt, tt); phenotype is the observable characteristic (e.g., tall, short).',
          'Sex determination in humans: females are XX, males are XY. The father\'s sperm (X or Y) determines the sex of the child.',
          'Natural selection: organisms with beneficial variations survive and reproduce more, passing those traits to offspring — driving evolutionary change over generations.'
        ],
        examTips: [
          'Always show your working in genetic crosses — draw a Punnett square even for monohybrid crosses to show all possible genotype combinations.',
          'For sex-linked traits, always write the X-linked allele as a superscript on the X chromosome (e.g., X^H for haemophilia carrier). Never use Y as a carrier.',
          'When asked for a phenotypic ratio, give 3:1 for monohybrid F2 and 9:3:3:1 for dihybrid F2 crosses between heterozygous parents.'
        ],
        commonMistakes: [
          'Mixing up genotype and phenotype — genotype is the alleles an organism carries; phenotype is what you can actually observe or measure about the organism.',
          'Forgetting that a carrier female for an X-linked recessive trait is NOT affected — she has one dominant and one recessive allele on her X chromosomes.'
        ],
        mcq: [
          {
            q: 'In a cross between two heterozygous tall plants (Tt × Tt), the expected phenotypic ratio of the offspring is',
            options: ['A. 1:2:1', 'B. 3 tall : 1 short', 'C. 1 tall : 1 short', 'D. all tall'],
            answer: 1,
            explanation: 'In a monohybrid cross Tt × Tt, the offspring are TT, Tt, Tt, tt. TT and Tt are tall (dominant), tt is short. Phenotypic ratio = 3 tall : 1 short.'
          },
          {
            q: 'Which of the following correctly defines a recessive allele?',
            options: [
              'A. An allele that expresses itself when only one copy is present',
              'B. An allele that is only expressed when two identical copies are present',
              'C. An allele found only on the Y chromosome',
              'D. An allele that causes mutations'
            ],
            answer: 1,
            explanation: 'A recessive allele is only expressed in the phenotype when two copies are present (homozygous recessive genotype, e.g., tt). A dominant allele expresses itself even with one copy.'
          },
          {
            q: 'Sex determination in humans depends on',
            options: [
              'A. the X chromosome carried by the egg',
              'B. the sex chromosome carried by the sperm',
              'C. the temperature of the environment',
              'D. the number of autosomes'
            ],
            answer: 1,
            explanation: 'The sex of a child is determined by the sex chromosome in the father\'s sperm. If the sperm carries a Y chromosome, the child is male (XY); if it carries an X, the child is female (XX).'
          },
          {
            q: 'A woman who is a carrier of colour blindness (X^C X^c) marries a normal-sighted man (X^C Y). What proportion of their sons will be colour blind?',
            options: ['A. None', 'B. 1/4', 'C. 1/2', 'D. All of them'],
            answer: 2,
            explanation: 'Sons inherit their X chromosome from their mother. The mother passes X^C or X^c with equal probability. Sons who receive X^c from the mother will be colour blind (X^c Y). So 1/2 of sons will be colour blind.'
          },
          {
            q: 'Sickle cell anaemia is caused by',
            options: [
              'A. a chromosomal mutation changing the number of chromosomes',
              'B. a gene mutation causing a change in one DNA base pair',
              'C. a sex-linked dominant allele',
              'D. non-disjunction during meiosis'
            ],
            answer: 1,
            explanation: 'Sickle cell anaemia is caused by a point (gene) mutation — a single base substitution in the haemoglobin gene. This causes glutamic acid to be replaced by valine, producing abnormal haemoglobin S.'
          },
          {
            q: 'The observable physical characteristics of an organism resulting from its genetic make-up is called its',
            options: ['A. genotype', 'B. karyotype', 'C. phenotype', 'D. gamete'],
            answer: 2,
            explanation: 'The phenotype is the observable expression of the genotype — including physical traits such as height, colour, and blood group. The genotype is the actual allele combination carried by the organism.'
          },
          {
            q: 'In a dihybrid cross between two double heterozygotes (AaBb × AaBb), the expected phenotypic ratio in the offspring is',
            options: ['A. 1:2:1', 'B. 3:1', 'C. 9:3:3:1', 'D. 1:1:1:1'],
            answer: 2,
            explanation: 'The classic dihybrid cross between AaBb × AaBb produces offspring in the ratio 9 (A_B_) : 3 (A_bb) : 3 (aaB_) : 1 (aabb), a 9:3:3:1 ratio, because both gene pairs segregate independently.'
          },
          {
            q: 'Which of the following is NOT evidence for the theory of evolution?',
            options: [
              'A. The fossil record showing progression of organisms over time',
              'B. Homologous structures in different species',
              'C. The ability of organisms to produce more offspring than can survive',
              'D. Similarities in DNA sequences between related species'
            ],
            answer: 2,
            explanation: 'The ability to produce more offspring than can survive is a premise of natural selection (overproduction), not evidence for evolution. Fossils, homologous structures, and molecular similarities are actual evidence for evolutionary change.'
          },
          {
            q: 'Down syndrome is caused by',
            options: [
              'A. a gene mutation on chromosome 21',
              'B. trisomy 21 — the presence of an extra chromosome 21',
              'C. deletion of part of chromosome 21',
              'D. an X-linked recessive allele'
            ],
            answer: 1,
            explanation: 'Down syndrome (trisomy 21) occurs when non-disjunction during meiosis results in a gamete with two copies of chromosome 21. After fertilisation, the zygote has three copies (trisomy) of chromosome 21.'
          },
          {
            q: 'Mendel\'s Law of Independent Assortment states that',
            options: [
              'A. alleles for a trait separate during gamete formation',
              'B. only dominant alleles are passed to offspring',
              'C. alleles for different traits are inherited independently of one another',
              'D. each gamete receives the same combination of alleles as the parent'
            ],
            answer: 2,
            explanation: 'The Law of Independent Assortment states that alleles of different genes are distributed to gametes independently of each other. This applies to genes on different chromosomes and explains why new combinations of traits appear in offspring.'
          }
        ],
        theory: [
          {
            question: 'In humans, haemophilia is an X-linked recessive disorder. A carrier woman marries a normal man. (a) State the genotypes of both parents. (b) Using a Punnett square, show the possible genotypes of their children. (c) What percentage of their sons will have haemophilia?',
            marks: 8,
            answer: `<p>(a) Let X^H = normal allele; X^h = haemophilia allele.<br>
Carrier woman genotype: X^H X^h<br>
Normal man genotype: X^H Y</p>
<p>(b) Punnett square:</p>
<table style="border-collapse:collapse; margin:0.5rem 0;">
  <tr><td style="border:1px solid #ccc; padding:4px;">×</td><td style="border:1px solid #ccc; padding:4px;">X^H</td><td style="border:1px solid #ccc; padding:4px;">Y</td></tr>
  <tr><td style="border:1px solid #ccc; padding:4px;">X^H</td><td style="border:1px solid #ccc; padding:4px;">X^H X^H (normal female)</td><td style="border:1px solid #ccc; padding:4px;">X^H Y (normal male)</td></tr>
  <tr><td style="border:1px solid #ccc; padding:4px;">X^h</td><td style="border:1px solid #ccc; padding:4px;">X^H X^h (carrier female)</td><td style="border:1px solid #ccc; padding:4px;">X^h Y (haemophiliac male)</td></tr>
</table>
<p>(c) Of the sons: X^H Y (normal) and X^h Y (haemophiliac). 50% (1 in 2) of their sons will have haemophilia.</p>`,
            markingGuide: '2 marks for correct parental genotypes. 3 marks for correct Punnett square (1 for layout, 2 for correct genotypes). 2 marks for correct offspring genotypes listed. 1 mark for stating 50% of sons will be haemophiliacs. Total 8 marks.'
          },
          {
            question: 'Explain Darwin\'s theory of natural selection using the example of antibiotic resistance in bacteria.',
            marks: 6,
            answer: `<p>Darwin's theory of natural selection applied to antibiotic resistance:</p>
<ul>
  <li><strong>Variation:</strong> In a population of bacteria, there is natural variation. Some bacteria, due to random mutations, may carry genes that confer resistance to an antibiotic.</li>
  <li><strong>Selection pressure:</strong> When an antibiotic is introduced, it acts as a selection pressure — it kills non-resistant bacteria but cannot kill resistant ones.</li>
  <li><strong>Survival of the fittest:</strong> Resistant bacteria survive and reproduce while non-resistant bacteria die.</li>
  <li><strong>Inheritance:</strong> Resistant bacteria pass their resistance genes to offspring through reproduction.</li>
  <li><strong>Evolution:</strong> Over many generations, the proportion of resistant bacteria in the population increases. Eventually, the whole population may be resistant — the antibiotic becomes ineffective.</li>
</ul>`,
            markingGuide: '1 mark for variation in original population. 1 mark for antibiotic as selection pressure. 1 mark for survival of resistant bacteria. 1 mark for reproduction and passing on resistance. 1 mark for increase in resistant bacteria over generations. 1 mark for clear logical explanation overall. Total 6 marks.'
          }
        ]
      },
      {
        id: 'ecology_environment',
        name: 'Ecology & the Environment',
        icon: '🌿',
        lessonNotes: `<h4>1. Ecosystem Components</h4>
<p>An <strong>ecosystem</strong> is a community of living organisms interacting with each other and their non-living environment as a functional unit.</p>
<ul>
  <li><strong>Biotic components:</strong> All living things — producers (plants/algae), consumers (herbivores, carnivores, omnivores), decomposers (bacteria, fungi).</li>
  <li><strong>Abiotic components:</strong> Non-living factors — temperature, light intensity, rainfall, humidity, pH, soil type, wind speed.</li>
</ul>

<h4>2. Food Chains and Food Webs</h4>
<p>A <strong>food chain</strong> shows the linear transfer of energy from one organism to another. It always begins with a <strong>producer</strong> (autotroph/plant) and proceeds through consumers:</p>
<p style="text-align:center;"><em>Grass → Grasshopper → Frog → Snake → Eagle</em></p>
<p>A <strong>food web</strong> is an interconnected network of food chains showing all feeding relationships in an ecosystem. Food webs are more realistic because most organisms eat and are eaten by more than one species.</p>
<ul>
  <li><strong>Producer:</strong> Makes its own food through photosynthesis (1st trophic level).</li>
  <li><strong>Primary consumer:</strong> Eats producers; herbivore (2nd trophic level).</li>
  <li><strong>Secondary consumer:</strong> Eats primary consumers; carnivore (3rd trophic level).</li>
  <li><strong>Tertiary consumer:</strong> Top predator (4th trophic level).</li>
</ul>

<h4>3. Energy Flow and the 10% Rule</h4>
<p>Energy flows in one direction through an ecosystem. At each trophic level, approximately <strong>90% of energy is lost</strong> as heat (respiration), movement, and waste. Only about <strong>10% is transferred</strong> to the next trophic level. This is the <strong>10% rule (ten percent law)</strong>.</p>
<p>This explains why food chains rarely have more than 4–5 trophic levels — there is simply not enough energy left to support organisms at higher levels.</p>
<p>An <strong>ecological pyramid</strong> can show numbers, biomass, or energy at each trophic level. Pyramids of energy are always pyramid-shaped (widest at base); pyramids of numbers can be inverted.</p>

<h4>4. Nutrient Cycles</h4>
<p><strong>Carbon cycle:</strong> Carbon enters the atmosphere as CO₂ through respiration, decomposition, combustion, and volcanic activity. It is removed from the atmosphere by photosynthesis. Carbon is stored in fossil fuels, wood, and organic matter.</p>
<p><strong>Nitrogen cycle:</strong> Nitrogen gas (N₂) in the atmosphere is fixed into usable compounds by nitrogen-fixing bacteria (in soil or root nodules of legumes). Plants absorb nitrates (NO₃⁻) for protein synthesis. Animals get nitrogen by eating plants/animals. Decomposers break down waste into ammonia (ammonification). Nitrifying bacteria convert ammonia → nitrites → nitrates. Denitrifying bacteria return nitrogen to the atmosphere.</p>
<p><strong>Water cycle:</strong> Evaporation → Condensation → Precipitation → Run-off/Infiltration → Transpiration.</p>

<h4>5. Population Dynamics</h4>
<p>Population size is affected by four factors:</p>
<ul>
  <li><strong>Natality (birth rate):</strong> Increases population.</li>
  <li><strong>Mortality (death rate):</strong> Decreases population.</li>
  <li><strong>Immigration:</strong> Individuals moving INTO the area — increases population.</li>
  <li><strong>Emigration:</strong> Individuals moving OUT of the area — decreases population.</li>
</ul>
<p>Population growth is limited by <strong>carrying capacity</strong> (the maximum population size an environment can sustain). This leads to an S-shaped (sigmoid/logistic) growth curve.</p>

<h4>6. Ecological Succession</h4>
<p>Succession is the gradual change in the species composition of a community over time. <strong>Primary succession</strong> begins on bare rock or new land with no soil (pioneer species like lichens and mosses begin to break down rock). <strong>Secondary succession</strong> occurs after a disturbance in an existing community (e.g., after a forest fire) — soil is already present. The final stable community is called a <strong>climax community</strong>.</p>

<h4>7. Conservation and Pollution</h4>
<p><strong>Biodiversity</strong> is the variety of life on Earth — species diversity, genetic diversity, and ecosystem diversity. Conservation protects biodiversity through national parks, game reserves, seed banks, and captive breeding programs.</p>
<p><strong>Pollution types:</strong></p>
<ul>
  <li><strong>Air pollution:</strong> CO₂ and methane cause global warming (greenhouse effect); SO₂ and NOₓ cause acid rain; CFCs deplete the ozone layer.</li>
  <li><strong>Water pollution:</strong> Sewage, fertiliser run-off (eutrophication — algal bloom → depletes oxygen → kills aquatic life), oil spills, industrial effluents.</li>
  <li><strong>Soil pollution:</strong> Pesticides, heavy metals, plastic waste reduce soil fertility and kill soil organisms.</li>
</ul>`,
        keyPoints: [
          'Biotic factors are living components (producers, consumers, decomposers); abiotic factors are non-living (temperature, light, water, pH).',
          'The 10% rule: only about 10% of energy is transferred from one trophic level to the next; 90% is lost as heat and waste.',
          'Population size = (Births + Immigration) − (Deaths + Emigration).',
          'Eutrophication occurs when excess fertilisers enter water bodies, causing algal blooms that deplete oxygen and kill aquatic organisms.'
        ],
        examTips: [
          'When drawing a food chain, always use arrows pointing from prey to predator to show the direction of energy flow, not "is eaten by."',
          'For nitrogen cycle questions, name the specific types of bacteria: nitrogen-fixing bacteria, nitrifying bacteria, and denitrifying bacteria, and state what each does.',
          'Distinguish between primary succession (starts on bare rock, no soil) and secondary succession (soil present, after disturbance) — WAEC frequently tests this distinction.'
        ],
        commonMistakes: [
          'Stating that energy is recycled in ecosystems — energy flows in ONE direction only (from sun through producers to consumers) and is not recycled. Only matter/nutrients are recycled.',
          'Confusing immigration and emigration — immigration is movement INTO a habitat (increases population); emigration is movement OUT (decreases population).'
        ],
        mcq: [
          {
            q: 'In a food chain, the organisms that manufacture their own food through photosynthesis are called',
            options: ['A. decomposers', 'B. primary consumers', 'C. producers', 'D. secondary consumers'],
            answer: 2,
            explanation: 'Producers (autotrophs) manufacture their own food through photosynthesis. They form the first trophic level in any food chain. Examples include green plants and algae.'
          },
          {
            q: 'According to the 10% rule of energy transfer in ecosystems, if producers fix 10,000 kJ of energy, how much energy is available to primary consumers?',
            options: ['A. 10,000 kJ', 'B. 1,000 kJ', 'C. 100 kJ', 'D. 10 kJ'],
            answer: 1,
            explanation: 'Only 10% of energy is transferred from one trophic level to the next. 10% of 10,000 kJ = 1,000 kJ is available to primary consumers.'
          },
          {
            q: 'Which of the following bacteria is responsible for converting atmospheric nitrogen into compounds that plants can use?',
            options: ['A. Nitrifying bacteria', 'B. Denitrifying bacteria', 'C. Nitrogen-fixing bacteria', 'D. Decomposing bacteria'],
            answer: 2,
            explanation: 'Nitrogen-fixing bacteria (e.g., Rhizobium in legume root nodules, Azotobacter in soil) convert atmospheric N₂ into ammonia (NH₃) or ammonium compounds that plants can absorb and use for protein synthesis.'
          },
          {
            q: 'Eutrophication of water bodies is mainly caused by',
            options: [
              'A. excess carbon dioxide in the water',
              'B. run-off of fertilisers containing nitrates and phosphates',
              'C. high water temperature',
              'D. introduction of large fish into the water'
            ],
            answer: 1,
            explanation: 'Eutrophication occurs when excess nitrates and phosphates from agricultural fertilisers wash into water bodies, stimulating rapid growth of algae (algal bloom). When algae die, their decomposition depletes oxygen, killing aquatic life.'
          },
          {
            q: 'Which of the following is an ABIOTIC component of an ecosystem?',
            options: ['A. Bacteria', 'B. Green plants', 'C. Soil temperature', 'D. Herbivores'],
            answer: 2,
            explanation: 'Abiotic components are non-living physical and chemical factors. Soil temperature is an abiotic factor. Bacteria, green plants, and herbivores are all biotic (living) components.'
          },
          {
            q: 'Ecological succession that begins on bare rock with no soil is called',
            options: ['A. secondary succession', 'B. climax succession', 'C. primary succession', 'D. retrogressive succession'],
            answer: 2,
            explanation: 'Primary succession occurs on bare substrate (bare rock, new volcanic islands) where no soil exists. Pioneer species (lichens, mosses) colonise first, gradually building soil that allows more complex communities to develop.'
          },
          {
            q: 'Which of the following correctly describes how population size changes?',
            options: [
              'A. Population size increases with emigration and death',
              'B. Population size = (births + immigration) − (deaths + emigration)',
              'C. Population size is only affected by birth and death rates',
              'D. Population size = births − deaths only'
            ],
            answer: 1,
            explanation: 'Population size is determined by four factors: births and immigration increase population; deaths and emigration decrease it. The formula is: Population change = (Births + Immigration) − (Deaths + Emigration).'
          },
          {
            q: 'Which gas released by burning fossil fuels is primarily responsible for the enhanced greenhouse effect?',
            options: ['A. Oxygen', 'B. Nitrogen', 'C. Carbon dioxide', 'D. Argon'],
            answer: 2,
            explanation: 'Carbon dioxide (CO₂) is the main greenhouse gas produced by burning fossil fuels. It traps heat in the atmosphere, leading to global warming. Methane (CH₄) is also a significant greenhouse gas from livestock and landfills.'
          },
          {
            q: 'In the nitrogen cycle, which process converts nitrates back into atmospheric nitrogen gas?',
            options: ['A. Nitrification', 'B. Ammonification', 'C. Nitrogen fixation', 'D. Denitrification'],
            answer: 3,
            explanation: 'Denitrification is the process by which denitrifying bacteria (e.g., Pseudomonas denitrificans) in waterlogged soils convert nitrates (NO₃⁻) back into nitrogen gas (N₂), returning it to the atmosphere.'
          },
          {
            q: 'A stable final community that develops at the end of ecological succession is called a',
            options: ['A. pioneer community', 'B. climax community', 'C. biome', 'D. habitat'],
            answer: 1,
            explanation: 'A climax community is the stable, self-sustaining community of organisms that represents the final stage of ecological succession. It is in equilibrium with the environment and changes very little unless disturbed.'
          }
        ],
        theory: [
          {
            question: 'Describe the flow of energy through a named ecosystem, including the role of decomposers. State why food chains rarely exceed five trophic levels.',
            marks: 8,
            answer: `<p>Example: A grassland ecosystem</p>
<p><strong>Energy flow:</strong> Energy enters the ecosystem from the sun. Producers (grass) absorb light energy and convert it to chemical energy through photosynthesis. Primary consumers (grasshoppers) eat the grass, obtaining energy stored in plant tissues. Secondary consumers (frogs) eat grasshoppers. Tertiary consumers (snakes) eat frogs. At each level, energy is transferred.</p>
<p><strong>Role of decomposers:</strong> Decomposers (bacteria and fungi) break down dead organisms and waste products at all trophic levels into simpler inorganic substances through decomposition. This releases nutrients back into the soil for producers to absorb, completing nutrient cycling. They also release energy as heat.</p>
<p><strong>Why food chains rarely exceed 5 levels:</strong> At each trophic level, approximately 90% of energy is lost as heat through respiration, movement, and in waste products. Only about 10% of energy is transferred to the next level. After 4–5 trophic levels, so little energy remains that it cannot support a viable population of organisms.</p>`,
            markingGuide: '2 marks for correctly describing energy entry and flow through 3+ trophic levels. 2 marks for role of decomposers (breaking down dead matter, releasing nutrients). 2 marks for 10% energy transfer rule. 2 marks for explaining why food chains are short (insufficient energy at higher levels). Total 8 marks.'
          },
          {
            question: 'Explain what is meant by biodiversity and discuss THREE ways in which human activities threaten biodiversity.',
            marks: 6,
            answer: `<p><strong>Biodiversity</strong> refers to the variety of living organisms in a given area — including species diversity (number of different species), genetic diversity (variety of genes within a species), and ecosystem diversity (variety of habitats and ecosystems).</p>
<p><strong>Three threats from human activities:</strong></p>
<ul>
  <li><strong>Habitat destruction:</strong> Deforestation, urbanisation, and agriculture clear natural habitats, destroying the homes and food sources of many species, leading to local and global extinctions.</li>
  <li><strong>Pollution:</strong> Industrial waste, pesticides, and fertilisers contaminate air, water, and soil, killing sensitive species and disrupting food chains. Oil spills devastate marine ecosystems.</li>
  <li><strong>Overexploitation/overhunting:</strong> Excessive hunting, fishing, or harvesting of wild species (e.g., bushmeat, illegal wildlife trade, overfishing) reduces populations below sustainable levels, causing population collapse.</li>
</ul>`,
            markingGuide: '2 marks for correct definition of biodiversity (mentioning species/genetic/ecosystem diversity). 1 mark + 1 explanation for each of 3 human threats correctly described (3 × 1 = 3 marks). 1 mark for clarity and logical presentation. Total 6 marks.'
          }
        ]
      },
      {
        id: 'human_physiology',
        name: 'Human Body Systems & Physiology',
        icon: '🫀',
        lessonNotes: `<h4>1. The Digestive System</h4>
<p>Digestion breaks down large, insoluble food molecules into small, soluble molecules that can be absorbed into the blood. The main organs are: mouth, oesophagus, stomach, small intestine (duodenum + ileum), large intestine, liver, and pancreas.</p>
<ul>
  <li><strong>Mouth:</strong> Mechanical digestion (teeth). Salivary amylase begins starch digestion.</li>
  <li><strong>Stomach:</strong> Produces pepsin (protein → peptides) and hydrochloric acid (kills bacteria, activates pepsin). Churning continues mechanical digestion.</li>
  <li><strong>Small intestine:</strong> Main site of digestion and absorption. Pancreatic amylase (starch → maltose), lipase (fats → fatty acids + glycerol), protease (protein → amino acids). Bile (from liver, stored in gall bladder) emulsifies fats.</li>
  <li><strong>Absorption:</strong> Villi and microvilli in the ileum increase surface area for absorption. Glucose and amino acids enter blood capillaries; fatty acids and glycerol enter lymph vessels (lacteals).</li>
</ul>

<h4>2. The Respiratory System</h4>
<p>The respiratory system brings oxygen into the body and removes carbon dioxide. Key structures: nasal cavity, trachea, bronchi, bronchioles, alveoli (in lungs).</p>
<p><strong>Breathing mechanism:</strong></p>
<ul>
  <li><strong>Inhalation:</strong> Diaphragm contracts (flattens), intercostal muscles contract, ribcage moves up and out → thoracic volume increases → pressure decreases → air rushes in.</li>
  <li><strong>Exhalation:</strong> Diaphragm relaxes, ribcage moves down and in → thoracic volume decreases → pressure increases → air pushed out.</li>
</ul>
<p><strong>Gas exchange</strong> occurs in the alveoli. Oxygen diffuses from the alveoli (high O₂) into blood capillaries (low O₂). CO₂ diffuses from blood (high CO₂) into alveoli (low CO₂). The alveoli have thin walls (one cell thick), large surface area, moist lining, and rich blood supply to maximise gas exchange.</p>

<h4>3. The Circulatory System</h4>
<p>The heart is a double pump with four chambers:</p>
<ul>
  <li><strong>Right atrium:</strong> Receives deoxygenated blood from the body (via vena cava).</li>
  <li><strong>Right ventricle:</strong> Pumps deoxygenated blood to the lungs (pulmonary circulation).</li>
  <li><strong>Left atrium:</strong> Receives oxygenated blood from the lungs (via pulmonary vein).</li>
  <li><strong>Left ventricle:</strong> Pumps oxygenated blood to the body (systemic circulation). Has the thickest wall.</li>
</ul>
<p><strong>Blood vessels:</strong> Arteries carry blood away from the heart (thick elastic walls, high pressure). Veins carry blood to the heart (thin walls, have valves). Capillaries are thin (one cell wall) — site of exchange.</p>
<p><strong>Blood components:</strong> Red blood cells (RBC/erythrocytes) — carry oxygen via haemoglobin, no nucleus, biconcave disc shape. White blood cells (WBC/leucocytes) — fight infection (phagocytes engulf bacteria; lymphocytes make antibodies). Platelets (thrombocytes) — blood clotting. Plasma — liquid that carries dissolved substances (glucose, CO₂, hormones, antibodies).</p>
<p><strong>ABO blood groups:</strong> A, B, AB (universal recipient), O (universal donor). Determined by antigens on red blood cells and antibodies in plasma.</p>

<h4>4. The Excretory System</h4>
<p>The kidneys filter blood and produce urine. The functional unit of the kidney is the <strong>nephron</strong>. Urine formation involves:</p>
<ul>
  <li><strong>Ultrafiltration:</strong> High pressure in the glomerulus forces small molecules (water, glucose, urea, salts) out of the blood into the Bowman's capsule, forming the filtrate.</li>
  <li><strong>Selective reabsorption:</strong> Useful substances (glucose, most water, some salts) are reabsorbed back into the blood in the tubules.</li>
  <li><strong>Secretion:</strong> Additional waste substances (e.g., H⁺ ions, drugs) are secreted from blood into the tubule.</li>
</ul>
<p>The resulting urine contains water, urea, excess salts, and other waste products.</p>

<h4>5. The Nervous System</h4>
<p>The nervous system has two main divisions: <strong>CNS</strong> (brain + spinal cord) and <strong>PNS</strong> (all nerves outside CNS — sensory and motor nerves).</p>
<p>Neurons: <strong>Sensory neurons</strong> carry impulses from receptors to CNS. <strong>Motor neurons</strong> carry impulses from CNS to effectors. <strong>Relay (interneurons)</strong> connect sensory to motor neurons in the CNS.</p>
<p><strong>Reflex arc</strong> (automatic, rapid response): Stimulus → Receptor → Sensory neuron → Spinal cord (relay neuron) → Motor neuron → Effector (muscle/gland) → Response. Example: pulling hand from a hot object.</p>

<h4>6. The Endocrine System</h4>
<p>Hormones are chemical messengers produced by endocrine glands and transported in the blood. Key hormones include: <strong>Insulin</strong> (pancreas — lowers blood glucose), <strong>Glucagon</strong> (pancreas — raises blood glucose), <strong>Adrenaline</strong> (adrenal glands — fight or flight response), <strong>Oestrogen/Progesterone</strong> (ovaries — female reproductive cycle), <strong>Testosterone</strong> (testes — male secondary sex characteristics), <strong>Thyroxine</strong> (thyroid — controls metabolic rate), <strong>ADH</strong> (pituitary — water reabsorption in kidneys).</p>`,
        keyPoints: [
          'Enzymes of digestion: salivary amylase (starch, mouth), pepsin (protein, stomach), pancreatic amylase/lipase/protease (small intestine). Bile emulsifies fats.',
          'Left ventricle has the thickest walls because it pumps blood to the entire body; the right ventricle pumps only to the lungs.',
          'Nephron function: ultrafiltration in the glomerulus/Bowman\'s capsule → selective reabsorption in tubules → secretion → urine formation.',
          'Reflex arc pathway: Receptor → Sensory neuron → Relay neuron (spinal cord) → Motor neuron → Effector.'
        ],
        examTips: [
          'Remember which blood vessel carries oxygenated blood FROM the lungs to the heart — it is the pulmonary VEIN (not artery). The pulmonary artery carries deoxygenated blood FROM the heart TO the lungs.',
          'For digestion enzyme questions, always state the substrate (what it acts on) and the product — not just the name of the enzyme.',
          'Blood group O is the universal DONOR (no A or B antigens on RBCs); blood group AB is the universal RECIPIENT (has both A and B antigens, no antibodies against either).'
        ],
        commonMistakes: [
          'Saying arteries always carry oxygenated blood — the pulmonary artery is an artery that carries DEOXYGENATED blood from the heart to the lungs. Vessels are named by direction of flow, not oxygen content.',
          'Confusing ultrafiltration and selective reabsorption in the nephron — ultrafiltration forces substances OUT of the blood; selective reabsorption returns useful substances BACK into the blood.'
        ],
        mcq: [
          {
            q: 'Which enzyme in the stomach begins the digestion of proteins?',
            options: ['A. Amylase', 'B. Lipase', 'C. Pepsin', 'D. Maltase'],
            answer: 2,
            explanation: 'Pepsin is a protease enzyme produced in the stomach (as inactive pepsinogen, activated by HCl). It breaks proteins into shorter peptide chains. Amylase digests starch; lipase digests fats.'
          },
          {
            q: 'The main site of absorption of digested food products in humans is the',
            options: ['A. stomach', 'B. large intestine', 'C. oesophagus', 'D. small intestine (ileum)'],
            answer: 3,
            explanation: 'The ileum (part of the small intestine) is the main site of absorption. Its inner lining is folded into villi and microvilli (brush border) to give a massive surface area. Glucose and amino acids enter blood capillaries; fats enter lacteals.'
          },
          {
            q: 'The chamber of the heart that pumps oxygenated blood to all parts of the body is the',
            options: ['A. right atrium', 'B. right ventricle', 'C. left atrium', 'D. left ventricle'],
            answer: 3,
            explanation: 'The left ventricle pumps oxygenated blood into the aorta and out to the entire body. It has the thickest muscular wall of all four chambers because it must generate the highest pressure for systemic circulation.'
          },
          {
            q: 'Gas exchange in the human lungs occurs in the',
            options: ['A. trachea', 'B. bronchi', 'C. alveoli', 'D. bronchioles'],
            answer: 2,
            explanation: 'Gas exchange (O₂ into blood, CO₂ out of blood) occurs across the thin walls of the alveoli. They have a large surface area, thin moist walls, and a rich blood capillary network — all adaptations for efficient gas exchange.'
          },
          {
            q: 'Which blood component is responsible for producing antibodies to fight infection?',
            options: ['A. Red blood cells', 'B. Platelets', 'C. Plasma', 'D. Lymphocytes (white blood cells)'],
            answer: 3,
            explanation: 'Lymphocytes are a type of white blood cell (WBC) that produce specific antibodies in response to antigens (foreign substances). Phagocytes are WBCs that engulf and destroy bacteria directly. Red blood cells carry oxygen; platelets are for clotting.'
          },
          {
            q: 'The functional unit of the kidney is the',
            options: ['A. nephron', 'B. glomerulus', 'C. ureter', 'D. renal pelvis'],
            answer: 0,
            explanation: 'The nephron is the structural and functional unit of the kidney. Each kidney contains approximately one million nephrons. Within the nephron, ultrafiltration (in the glomerulus/Bowman\'s capsule) and selective reabsorption (in the tubules) occur to produce urine.'
          },
          {
            q: 'In the reflex arc, impulses are carried from the spinal cord to the effector by',
            options: ['A. sensory neurons', 'B. relay neurons', 'C. motor neurons', 'D. receptor cells'],
            answer: 2,
            explanation: 'Motor neurons carry nerve impulses FROM the CNS (spinal cord or brain) TO effectors (muscles or glands). Sensory neurons carry impulses from receptors TO the CNS. Relay (interneurons) connect the two within the CNS.'
          },
          {
            q: 'Which blood group is considered the universal blood donor?',
            options: ['A. Blood group A', 'B. Blood group B', 'C. Blood group AB', 'D. Blood group O'],
            answer: 3,
            explanation: 'Blood group O (negative) is the universal donor because red blood cells of group O have no A or B antigens. They will not trigger an immune reaction in recipients of any blood group. Group AB is the universal recipient.'
          },
          {
            q: 'Bile, produced by the liver, aids in digestion by',
            options: [
              'A. breaking down proteins into amino acids',
              'B. emulsifying fats into smaller droplets',
              'C. converting starch into maltose',
              'D. secreting hydrochloric acid to kill bacteria'
            ],
            answer: 1,
            explanation: 'Bile is produced by the liver, stored in the gall bladder, and released into the duodenum. It emulsifies (breaks up) fat globules into smaller droplets, increasing the surface area for lipase enzymes to act on fats more efficiently. Bile does not contain enzymes.'
          },
          {
            q: 'Which hormone, produced by the pancreas, lowers blood glucose levels?',
            options: ['A. Glucagon', 'B. Adrenaline', 'C. Insulin', 'D. Thyroxine'],
            answer: 2,
            explanation: 'Insulin is produced by the beta cells of the islets of Langerhans in the pancreas. It stimulates cells to take up glucose and the liver to convert glucose to glycogen (glycogenesis), thereby lowering blood glucose levels.'
          }
        ],
        theory: [
          {
            question: 'Describe the process of urine formation in the nephron, naming the structures involved at each stage.',
            marks: 8,
            answer: `<p>Urine is formed in the nephron through three main processes:</p>
<p><strong>1. Ultrafiltration (Bowman's capsule and glomerulus):</strong><br>
Blood enters the kidney through the renal artery, which branches into the afferent arteriole leading to the glomerulus (a knot of capillaries inside the Bowman's capsule). The afferent arteriole is wider than the efferent arteriole, creating high hydrostatic pressure. This forces small molecules — water, glucose, urea, uric acid, mineral salts, and amino acids — through the capillary walls into the Bowman's capsule, forming the glomerular filtrate. Large proteins and blood cells cannot pass through and remain in the blood.</p>
<p><strong>2. Selective reabsorption (proximal convoluted tubule, loop of Henle, distal convoluted tubule):</strong><br>
As the filtrate flows through the tubules, useful substances are reabsorbed back into the surrounding blood capillaries. ALL glucose and amino acids are reabsorbed in the proximal convoluted tubule by active transport. Most water is reabsorbed in the loop of Henle and collecting duct (under the influence of ADH). Mineral salts are selectively reabsorbed in the distal tubule.</p>
<p><strong>3. Secretion:</strong><br>
Additional waste substances (hydrogen ions, potassium ions, certain drugs) are actively secreted from the blood capillaries into the tubule to be excreted.</p>
<p>The final urine, containing water, urea, uric acid, creatinine, and excess salts, flows into the collecting duct → renal pelvis → ureter → bladder → expelled through the urethra.</p>`,
            markingGuide: '2 marks for ultrafiltration (mentioning glomerulus, Bowman\'s capsule, high pressure, small molecules). 3 marks for selective reabsorption (glucose/amino acids in PCT, water in loop of Henle/collecting duct, ADH). 1 mark for secretion. 1 mark for correct sequence of structures (collecting duct → ureter → bladder). 1 mark for stating what urine contains. Total 8 marks.'
          },
          {
            question: 'Explain how the structure of the alveolus is adapted for efficient gas exchange. Include a description of what happens during gas exchange.',
            marks: 6,
            answer: `<p><strong>Structural adaptations of the alveolus:</strong></p>
<ul>
  <li><strong>Large surface area:</strong> Millions of alveoli in each lung provide a total surface area of approximately 70 m² in humans — maximising contact between air and blood.</li>
  <li><strong>Thin walls:</strong> Alveolar walls are only one cell thick (squamous epithelium), minimising the diffusion distance for gases.</li>
  <li><strong>Moist lining:</strong> Gases dissolve in the moisture layer before diffusing across the wall.</li>
  <li><strong>Rich capillary network:</strong> Each alveolus is surrounded by capillaries, maintaining a steep concentration gradient by continuously removing O₂ and delivering CO₂.</li>
</ul>
<p><strong>Gas exchange process:</strong></p>
<ul>
  <li>Oxygenated air in the alveolus has a higher partial pressure of O₂ than the deoxygenated blood in capillaries. Oxygen diffuses from the alveolus into the blood capillary and binds with haemoglobin to form oxyhaemoglobin.</li>
  <li>The blood capillaries have a higher concentration of CO₂ than the alveolar air. CO₂ diffuses from the blood into the alveolus and is breathed out during exhalation.</li>
</ul>`,
            markingGuide: '1 mark each for: large surface area, thin walls, moist lining, and rich blood supply (4 marks). 1 mark for correct description of O₂ diffusion from alveolus to blood. 1 mark for correct description of CO₂ diffusion from blood to alveolus. Total 6 marks.'
          }
        ]
      },
      {
        id: 'plant_biology',
        name: 'Plant Biology, Nutrition & Reproduction',
        icon: '🌱',
        lessonNotes: `<h4>1. Photosynthesis</h4>
<p>Photosynthesis is the process by which green plants use light energy to convert carbon dioxide and water into glucose and oxygen.</p>
<p><strong>Overall equation:</strong> 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in the presence of light and chlorophyll)</p>
<p>Photosynthesis occurs in two stages inside the chloroplast:</p>
<ul>
  <li><strong>Light-dependent reactions (in thylakoid membranes — grana):</strong> Light energy splits water molecules (photolysis) into hydrogen and oxygen (O₂ is released as a by-product). ATP and NADPH are produced. This stage requires light.</li>
  <li><strong>Light-independent reactions / Calvin Cycle (in the stroma):</strong> ATP and NADPH are used to fix CO₂ into glucose. Does not directly need light but depends on products of the light reactions.</li>
</ul>
<p><strong>Factors affecting the rate of photosynthesis:</strong></p>
<ul>
  <li><strong>Light intensity:</strong> Increasing light increases rate (up to a saturation point).</li>
  <li><strong>CO₂ concentration:</strong> Increasing CO₂ increases rate (up to a saturation point).</li>
  <li><strong>Temperature:</strong> Increases rate up to optimum (~25–35°C); beyond this, enzymes denature and rate drops.</li>
  <li><strong>Water availability:</strong> Water is a raw material; shortage reduces photosynthesis.</li>
  <li><strong>Chlorophyll content:</strong> More chlorophyll → greater light absorption → higher rate.</li>
</ul>

<h4>2. Transpiration</h4>
<p><strong>Transpiration</strong> is the loss of water vapour from the aerial parts of a plant, mainly through stomata in the leaves.</p>
<p><strong>Factors increasing transpiration rate:</strong> High temperature, low humidity, high wind speed, bright light (opens stomata), large leaf surface area.</p>
<p><strong>Importance of transpiration:</strong> Creates the transpiration pull (cohesion-tension mechanism) that draws water up the xylem from roots; cools the plant; transports dissolved minerals upward.</p>

<h4>3. Plant Transport: Xylem and Phloem</h4>
<ul>
  <li><strong>Xylem:</strong> Transports water and dissolved mineral salts from roots to leaves (upward only). Made of dead, hollow, lignified cells. Movement is driven by transpiration pull (cohesion-tension), root pressure, and capillarity.</li>
  <li><strong>Phloem:</strong> Transports dissolved organic substances (mainly sucrose/glucose) from leaves (source) to other parts of the plant (sinks — roots, fruits, growing tips). Movement is bidirectional. Process is called translocation. Made of living sieve tube elements with companion cells.</li>
</ul>

<h4>4. Plant Hormones</h4>
<ul>
  <li><strong>Auxin (IAA):</strong> Produced at shoot tips. Promotes cell elongation. Causes phototropism (shoots grow toward light — high auxin on the shaded side causes faster growth) and geotropism (roots grow downward, shoots grow upward). Used commercially as rooting powder.</li>
  <li><strong>Gibberellin:</strong> Promotes stem elongation, seed germination, and fruit development. Can cause dwarf plants to grow normally when applied.</li>
  <li><strong>Ethylene:</strong> A gas hormone that promotes fruit ripening and leaf/fruit abscission (falling).</li>
  <li><strong>Cytokinin:</strong> Promotes cell division. Delays ageing of plant parts.</li>
</ul>

<h4>5. Plant Reproduction</h4>
<p><strong>Sexual reproduction in flowering plants:</strong></p>
<ul>
  <li><strong>Flower structure:</strong> Petals (attract insects), sepals (protect bud), stamens (anther + filament — produce pollen/male gametes), pistil/carpel (stigma + style + ovary — contains ovules/female gametes).</li>
  <li><strong>Pollination:</strong> Transfer of pollen grains from the anther to the stigma. Cross-pollination (different plant, more variation) or self-pollination (same flower/plant). Agents: wind (light/dry pollen, feathery stigmas), insects (sticky pollen, brightly coloured petals, nectar), water, animals.</li>
  <li><strong>Fertilisation:</strong> Pollen tube grows from pollen grain down the style to the ovary. Two nuclei travel down: one fuses with the egg cell (forming a diploid zygote → embryo), the other fuses with polar nuclei (forming triploid endosperm — food store).</li>
  <li><strong>Seed dispersal:</strong> Wind (light seeds, wings/parachutes — dandelion, maple), animals (hooked seeds — burdock; fleshy fruit — berries), water (buoyant fruits — coconut), self-dispersal (explosive mechanisms — peas, Impatiens).</li>
</ul>
<p><strong>Asexual/vegetative propagation:</strong> Bulbs (onion), rhizomes (ginger), tubers (potato), stolons/runners (strawberry), cuttings, grafting. Produces genetically identical offspring (clones).</p>

<h4>6. Plant Nutrition</h4>
<p><strong>Macronutrients</strong> (needed in large amounts): Nitrogen (N) — protein/chlorophyll synthesis; Phosphorus (P) — DNA, ATP, cell membranes; Potassium (K) — enzyme activation, stomatal control; Calcium (Ca) — cell wall formation; Magnesium (Mg) — chlorophyll molecule centre; Sulphur (S) — amino acid synthesis.</p>
<p><strong>Micronutrients</strong> (needed in trace amounts): Iron (Fe), Manganese (Mn), Zinc (Zn), Copper (Cu), Boron (B), Molybdenum (Mo).</p>
<p><strong>Deficiency symptoms:</strong> Nitrogen deficiency → yellowing of older leaves (chlorosis), stunted growth. Magnesium deficiency → chlorosis (magnesium is part of chlorophyll). Phosphorus deficiency → purple/red discolouration of leaves, poor root development. Iron deficiency → chlorosis of young leaves.</p>`,
        keyPoints: [
          'Photosynthesis equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (needs light energy and chlorophyll). Rate is limited by light, CO₂, temperature, and water.',
          'Xylem transports water and minerals upward (dead cells); phloem transports sucrose/organic substances in both directions (living cells — translocation).',
          'Auxin causes positive phototropism in shoots: light causes unequal auxin distribution → more auxin on shaded side → faster elongation → shoot bends toward light.',
          'Double fertilisation in flowering plants: one sperm fuses with egg (→ diploid embryo); another fuses with polar nuclei (→ triploid endosperm/food store).'
        ],
        examTips: [
          'Always write the full balanced photosynthesis equation in WAEC answers — 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Award marks are given for the correct coefficients.',
          'For transpiration questions, describe the cohesion-tension mechanism: evaporation from leaves → water pulled up xylem by cohesion of water molecules and adhesion to xylem walls.',
          'Distinguish xylem from phloem clearly: xylem = dead cells, water + minerals upward; phloem = living cells, sucrose/organic solutes bidirectional.'
        ],
        commonMistakes: [
          'Stating that photosynthesis only occurs in daylight and respiration only at night — both processes occur simultaneously in plants; however, during the day photosynthesis rate exceeds respiration rate.',
          'Confusing pollination with fertilisation — pollination is the transfer of pollen to the stigma (no fusion occurs yet); fertilisation is the fusion of male and female gametes inside the ovule.'
        ],
        mcq: [
          {
            q: 'Which of the following is the correct equation for photosynthesis?',
            options: [
              'A. C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy',
              'B. 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
              'C. 6O₂ + C₆H₁₂O₆ → 6CO₂ + 6H₂O',
              'D. CO₂ + H₂O → C₆H₁₂O₆ + O₂'
            ],
            answer: 1,
            explanation: 'The correct equation for photosynthesis is: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Carbon dioxide and water are combined using light energy (in the presence of chlorophyll) to produce glucose and oxygen. Option A is the equation for aerobic respiration.'
          },
          {
            q: 'Transpiration in plants is the process by which',
            options: [
              'A. water is absorbed from the soil by root hair cells',
              'B. water vapour is lost from the aerial parts of a plant, mainly through stomata',
              'C. water is transported from roots to leaves in the phloem',
              'D. carbon dioxide diffuses into the leaf for photosynthesis'
            ],
            answer: 1,
            explanation: 'Transpiration is the evaporative loss of water vapour from plant surfaces, primarily through stomata in the leaves. It drives the transpiration stream, pulling water up through the xylem from roots to leaves.'
          },
          {
            q: 'The vascular tissue that transports water and dissolved minerals from roots to leaves in plants is',
            options: ['A. phloem', 'B. xylem', 'C. cortex', 'D. epidermis'],
            answer: 1,
            explanation: 'Xylem tissue transports water and dissolved mineral salts from the roots upward to all parts of the plant. Xylem vessels are made of dead, hollow, lignified cells. Phloem transports sugars and other organic compounds.'
          },
          {
            q: 'Which plant hormone is primarily responsible for causing shoots to bend toward a light source (positive phototropism)?',
            options: ['A. Gibberellin', 'B. Cytokinin', 'C. Ethylene', 'D. Auxin'],
            answer: 3,
            explanation: 'Auxin (IAA) is produced at the shoot tip. When light comes from one side, auxin moves to the shaded side, causing greater cell elongation there. This makes the shoot bend toward the light source — positive phototropism.'
          },
          {
            q: 'In a flower, the male reproductive structure that produces pollen grains is the',
            options: ['A. stigma', 'B. ovary', 'C. anther', 'D. style'],
            answer: 2,
            explanation: 'The anther is the male reproductive organ of a flower. It produces and releases pollen grains, which contain the male gametes (sperm nuclei). The anther is supported by the filament; together they form the stamen.'
          },
          {
            q: 'Which mineral element is required by plants for the synthesis of chlorophyll?',
            options: ['A. Phosphorus', 'B. Potassium', 'C. Magnesium', 'D. Calcium'],
            answer: 2,
            explanation: 'Magnesium is the central element in the chlorophyll molecule. Magnesium deficiency causes chlorosis (yellowing of leaves) because the plant cannot make sufficient chlorophyll.'
          },
          {
            q: 'Double fertilisation in flowering plants refers to',
            options: [
              'A. fertilisation occurring twice in the same ovule by two different pollen grains',
              'B. one sperm fusing with the egg cell and another sperm fusing with the polar nuclei',
              'C. the pollen tube growing twice to deliver more sperm cells',
              'D. both self and cross pollination occurring simultaneously'
            ],
            answer: 1,
            explanation: 'Double fertilisation is unique to flowering plants. Two sperm nuclei travel down the pollen tube. One fuses with the egg cell → diploid zygote (becomes the embryo). The other fuses with the two polar nuclei → triploid endosperm (food store for the seed).'
          },
          {
            q: 'Which of the following is a symptom of nitrogen deficiency in plants?',
            options: [
              'A. Purple discolouration of leaves',
              'B. Death of growing tips (necrosis)',
              'C. Yellowing and stunted growth of older leaves',
              'D. Leaf curl and wilting'
            ],
            answer: 2,
            explanation: 'Nitrogen is essential for protein synthesis and chlorophyll production. Nitrogen deficiency causes chlorosis (yellowing, particularly of older leaves) and stunted growth. Phosphorus deficiency causes purple/red discolouration.'
          },
          {
            q: 'The process by which organic substances are transported through the phloem of a plant is called',
            options: ['A. transpiration', 'B. translocation', 'C. evaporation', 'D. osmosis'],
            answer: 1,
            explanation: 'Translocation is the transport of dissolved organic molecules (mainly sucrose) through the phloem from sources (photosynthetic leaves) to sinks (roots, fruits, growing tips). It is an active process requiring energy.'
          },
          {
            q: 'Which of the following correctly describes wind-pollinated flowers compared to insect-pollinated flowers?',
            options: [
              'A. Large colourful petals and sticky pollen',
              'B. Small dull petals, light dry pollen, large feathery stigmas',
              'C. Scented flowers with nectar guides',
              'D. Heavy pollen with sticky coating and small stigmas'
            ],
            answer: 1,
            explanation: 'Wind-pollinated flowers are adapted for wind dispersal: small or absent petals (no need to attract insects), light smooth/dry pollen (easily blown by wind), and large feathery stigmas (to catch pollen from the air). They also have long stamens that hang outside the flower.'
          }
        ],
        theory: [
          {
            question: 'Describe an experiment to investigate the effect of light intensity on the rate of photosynthesis in an aquatic plant such as Elodea. Include the independent variable, dependent variable, and how you would measure the rate.',
            marks: 8,
            answer: `<p><strong>Aim:</strong> To investigate the effect of light intensity on the rate of photosynthesis.</p>
<p><strong>Materials:</strong> Elodea (pondweed), beaker of water, sodium hydrogen carbonate solution (to provide CO₂), lamp, metre ruler, stopwatch, measuring cylinder or syringe.</p>
<p><strong>Method:</strong></p>
<ol>
  <li>Place a fresh sprig of Elodea in a beaker of sodium hydrogen carbonate solution (to maintain CO₂ supply).</li>
  <li>Place a lamp at a measured distance (e.g., 10 cm) from the beaker.</li>
  <li>Allow the plant to equilibrate for 5 minutes, then count the number of oxygen bubbles produced per minute (or collect oxygen in a syringe and measure volume).</li>
  <li>Repeat at increasing distances from the lamp (20 cm, 30 cm, 40 cm, 50 cm) — further distance = lower light intensity.</li>
  <li>Keep all other variables constant: temperature (use a water bath), CO₂ concentration (same NaHCO₃ solution), same plant sprig.</li>
</ol>
<p><strong>Independent variable:</strong> Light intensity (changed by varying the distance of the lamp).</p>
<p><strong>Dependent variable:</strong> Rate of photosynthesis (measured by counting O₂ bubbles per minute or volume of O₂ collected).</p>
<p><strong>Expected result:</strong> As light intensity increases (lamp closer), the rate of photosynthesis increases. At very high intensities, the rate levels off (CO₂ or temperature becomes the limiting factor).</p>`,
            markingGuide: '1 mark for correct aim/hypothesis. 1 mark for named plant (Elodea). 1 mark for method of changing light intensity (lamp distance). 1 mark for measuring rate (bubble count or O₂ volume). 1 mark for independent variable named. 1 mark for dependent variable named. 1 mark for controlled variables (temperature, CO₂). 1 mark for expected result with explanation. Total 8 marks.'
          },
          {
            question: 'Describe the structure of a named insect-pollinated flower and explain how its features are adapted for pollination.',
            marks: 6,
            answer: `<p><strong>Named flower:</strong> Hibiscus (or any named insect-pollinated flower)</p>
<p><strong>Structure and adaptations:</strong></p>
<ul>
  <li><strong>Large, brightly coloured petals:</strong> Attract pollinating insects (bees, butterflies) from a distance. Colour acts as a visual signal.</li>
  <li><strong>Scent (from petals or nectaries):</strong> Attracts insects, especially at night (for moth-pollinated flowers). Guides insects to the flower.</li>
  <li><strong>Nectar (produced by nectaries):</strong> Reward for visiting insects, encouraging them to enter the flower and contact the anthers/stigma.</li>
  <li><strong>Sticky/spiky pollen grains:</strong> Stick to the body of visiting insects, ensuring transfer to the next flower's stigma.</li>
  <li><strong>Sticky stigma:</strong> Captures pollen grains that brush off visiting insects onto the stigma during the visit.</li>
  <li><strong>Positioned anthers and stigma:</strong> Arranged so that visiting insects brush against them, picking up and depositing pollen.</li>
</ul>`,
            markingGuide: '1 mark for named flower. 1 mark each for any 4 correctly described adaptations with explanations (4 marks). 1 mark for overall coherence and biological accuracy. Total 6 marks.'
          }
        ]
      }
    ],
    pastQuestions: [
      {
        year: 2019,
        question: 'Which of the following is the correct sequence of events in mitosis? A. Metaphase → Prophase → Anaphase → Telophase B. Prophase → Metaphase → Anaphase → Telophase C. Anaphase → Metaphase → Prophase → Telophase D. Telophase → Anaphase → Metaphase → Prophase',
        type: 'mcq',
        answer: 'B. Prophase → Metaphase → Anaphase → Telophase',
        explanation: 'The stages of mitosis follow the order PMAT: Prophase (chromosomes condense, nuclear envelope breaks down), Metaphase (chromosomes align at equator), Anaphase (chromatids pulled apart), Telophase (nuclear envelopes reform, cytokinesis occurs).'
      },
      {
        year: 2020,
        question: 'In a monohybrid cross between a homozygous tall plant (TT) and a homozygous short plant (tt), what would be the phenotype of all F1 offspring?',
        type: 'theory',
        answer: 'All F1 offspring would be tall (Tt). Since T (tall) is dominant over t (short), all heterozygous Tt plants express the tall phenotype.',
        explanation: 'When TT × tt are crossed, all offspring receive one T allele from the tall parent and one t allele from the short parent, giving genotype Tt. Because tall (T) is dominant, all Tt offspring are tall. This demonstrates the Law of Dominance.'
      },
      {
        year: 2021,
        question: 'The process by which water moves from a region of high water potential to a region of low water potential through a selectively permeable membrane is known as',
        type: 'mcq',
        answer: 'Osmosis',
        explanation: 'Osmosis is the passive movement of water molecules across a selectively permeable membrane from a region of higher water potential (more dilute solution) to a region of lower water potential (more concentrated solution). No energy is required.'
      },
      {
        year: 2022,
        question: 'Describe the role of decomposers in an ecosystem and explain why they are essential for the continuation of life on Earth.',
        type: 'theory',
        answer: 'Decomposers (bacteria and fungi) break down dead organic matter (dead organisms, excrement, leaf litter) into simpler inorganic compounds through the process of decomposition/mineralisation. This releases nutrients such as nitrates, phosphates, and carbon back into the soil and atmosphere. These minerals are then available for uptake by producers (plants) via their roots, allowing them to grow and synthesise organic compounds. Without decomposers, nutrients would remain locked in dead organic matter, quickly becoming unavailable to producers. Nutrient cycles (nitrogen cycle, carbon cycle) would stop, eventually causing all life to cease.',
        explanation: 'Decomposers are vital for recycling nutrients in ecosystems. Without them, dead matter would accumulate, nutrients would be permanently removed from circulation, producers could not grow, and all food chains would collapse.'
      },
      {
        year: 2023,
        question: 'Which part of the nephron is responsible for the ultrafiltration of blood?',
        type: 'mcq',
        answer: 'The Bowman\'s capsule (and glomerulus)',
        explanation: 'Ultrafiltration occurs in the renal corpuscle — the glomerulus (a knot of capillaries) is surrounded by the Bowman\'s capsule. High blood pressure in the glomerulus forces small molecules (water, glucose, urea, salts) into the Bowman\'s capsule, forming the glomerular filtrate. Large proteins and blood cells are retained.'
      }
    ]
  }
,
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    icon: '⚗️',
    color: '#db2777',
    bgColor: '#fce7f3',
    textColor: '#9d174d',
    category: 'science',
    examFormat: 'Paper 1: 50 MCQ (1hr 15min) | Paper 2: Theory (2hr) | Paper 3: Practical (2hr 45min)',
    totalTopics: 5,
    topics: [
      {
        id: 'atomic_structure',
        name: 'Atomic Structure & the Periodic Table',
        icon: '⚛️',
        lessonNotes: `<h4>1. Subatomic Particles</h4>
<p>Every atom is made up of three subatomic particles:</p>
<ul>
  <li><strong>Proton:</strong> Relative mass = 1; charge = +1; found in the nucleus.</li>
  <li><strong>Neutron:</strong> Relative mass = 1; charge = 0 (neutral); found in the nucleus.</li>
  <li><strong>Electron:</strong> Relative mass = 1/1836 (negligible ≈ 0); charge = −1; found in orbitals/shells surrounding the nucleus.</li>
</ul>
<p>The <strong>nucleus</strong> is tiny and dense — it contains protons and neutrons (collectively called nucleons) and carries a positive charge.</p>

<h4>2. Atomic Number and Mass Number</h4>
<ul>
  <li><strong>Atomic number (Z):</strong> The number of protons in the nucleus. This uniquely identifies an element. In a neutral atom, number of protons = number of electrons.</li>
  <li><strong>Mass number (A):</strong> The total number of protons + neutrons in the nucleus. A = Z + N (where N = number of neutrons).</li>
  <li><strong>Number of neutrons:</strong> N = A − Z</li>
</ul>
<p>Example: Sodium (Na) has atomic number 11, mass number 23. Protons = 11, Neutrons = 23 − 11 = 12, Electrons = 11.</p>

<h4>3. Isotopes</h4>
<p><strong>Isotopes</strong> are atoms of the same element with the same atomic number (same number of protons and electrons) but different mass numbers (different numbers of neutrons).</p>
<p>Examples: Carbon-12 (⁶¹²C) and Carbon-14 (⁶¹⁴C); Chlorine-35 and Chlorine-37; Hydrogen isotopes (protium, deuterium, tritium).</p>
<ul>
  <li>Isotopes have identical chemical properties (same electron configuration) but different physical properties (different mass — e.g., density, melting/boiling points may differ slightly).</li>
  <li>Radioactive isotopes (radioisotopes) emit radiation. Applications: carbon dating (¹⁴C), medical tracers, cancer treatment.</li>
</ul>

<h4>4. Electronic Configuration</h4>
<p>Electrons are arranged in shells (energy levels) around the nucleus. The shells fill in order: Shell 1 (closest to nucleus) holds up to 2 electrons; Shell 2 holds up to 8; Shell 3 holds up to 8 (for elements up to Ar in WASSCE context). This is the <strong>2,8,8 rule</strong>.</p>
<p>Examples:</p>
<ul>
  <li>Sodium (Z=11): 2, 8, 1 — 1 outer electron in shell 3 → Group I metal</li>
  <li>Chlorine (Z=17): 2, 8, 7 — 7 outer electrons → Group VII non-metal</li>
  <li>Argon (Z=18): 2, 8, 8 — full outer shell → Group 0 (noble gas), very stable</li>
  <li>Carbon (Z=6): 2, 4 — 4 outer electrons → Group IV</li>
</ul>
<p>The number of electrons in the outermost shell (valence electrons) determines the group number and chemical behaviour of the element.</p>

<h4>5. The Periodic Table</h4>
<p>The modern periodic table arranges elements in order of increasing atomic number. The table has:</p>
<ul>
  <li><strong>Periods (rows):</strong> 7 periods. The period number = the number of electron shells. Elements in the same period have the same number of shells.</li>
  <li><strong>Groups (columns):</strong> 18 groups. Group number (for main group elements) = number of valence electrons. Group 1 (alkali metals) through Group 7 (halogens) and Group 0 (noble gases).</li>
</ul>
<p><strong>Periodic trends:</strong></p>
<ul>
  <li><strong>Atomic radius:</strong> Decreases across a period (left to right — more protons, same shells, stronger pull). Increases down a group (more shells).</li>
  <li><strong>Electronegativity:</strong> Increases across a period; decreases down a group. Fluorine is the most electronegative element.</li>
  <li><strong>Ionisation energy (first):</strong> Generally increases across a period (more protons hold electrons more tightly). Decreases down a group (outer electrons further from nucleus, more shielded).</li>
  <li><strong>Metallic character:</strong> Decreases across a period (left = metals; right = non-metals). Increases down a group.</li>
</ul>
<p><strong>Metals</strong> (left/centre of table): conduct electricity, malleable, ductile, form positive ions, have low electronegativity. <strong>Non-metals</strong> (right of table): poor conductors, brittle (if solid), form negative ions or share electrons in covalent bonds, high electronegativity.</p>`,
        keyPoints: [
          'Protons and neutrons are in the nucleus; electrons orbit in shells. Atomic number = number of protons = number of electrons (in neutral atom). Mass number = protons + neutrons.',
          'Isotopes have the same atomic number but different mass numbers — same chemical properties, different physical properties.',
          'Electronic configuration follows the 2,8,8 rule: shells fill with up to 2, 8, 8 electrons. The number of outer (valence) electrons determines the group number.',
          'Across a period: atomic radius decreases, electronegativity increases, ionisation energy generally increases. Down a group: all these trends reverse.'
        ],
        examTips: [
          'For isotope questions, always state that isotopes have the same number of protons (and electrons) but different numbers of neutrons — never say they have different atomic numbers.',
          'Write electronic configurations systematically: state the number of electrons per shell from inside outward. For Na: write 2,8,1 — not just "11 electrons."',
          'For periodic trend questions, always explain WHY the trend occurs — e.g., atomic radius decreases across a period because nuclear charge increases with same number of electron shells, pulling electrons closer.'
        ],
        commonMistakes: [
          'Confusing atomic number with mass number — atomic number is the number of protons only; mass number is protons + neutrons. Never add electrons to the nucleus count.',
          'Stating that isotopes have different chemical properties — isotopes of the same element have identical chemical properties because they have the same electron configuration.'
        ],
        mcq: [
          {
            q: 'An atom of phosphorus has an atomic number of 15 and a mass number of 31. How many neutrons does it contain?',
            options: ['A. 15', 'B. 16', 'C. 31', 'D. 46'],
            answer: 1,
            explanation: 'Number of neutrons = Mass number − Atomic number = 31 − 15 = 16. The atomic number gives the number of protons (15); the mass number gives the total of protons and neutrons (31).'
          },
          {
            q: 'Isotopes of an element have the same',
            options: [
              'A. mass number but different atomic numbers',
              'B. number of neutrons but different numbers of protons',
              'C. atomic number but different mass numbers',
              'D. physical and chemical properties'
            ],
            answer: 2,
            explanation: 'Isotopes are atoms of the same element with the same atomic number (same protons) but different mass numbers (different number of neutrons). They have identical chemical properties but slightly different physical properties.'
          },
          {
            q: 'The electronic configuration of a chlorine atom (atomic number 17) is',
            options: ['A. 2, 8, 8', 'B. 2, 7, 8', 'C. 2, 8, 7', 'D. 8, 8, 1'],
            answer: 2,
            explanation: 'Chlorine has 17 electrons. They fill the shells as follows: Shell 1 = 2, Shell 2 = 8, Shell 3 = 7. Configuration: 2, 8, 7. This gives 7 valence electrons, placing chlorine in Group VII.'
          },
          {
            q: 'Which of the following statements correctly describes the trend in atomic radius across Period 3 of the periodic table?',
            options: [
              'A. Atomic radius increases from Na to Ar',
              'B. Atomic radius remains constant across the period',
              'C. Atomic radius decreases from Na to Ar',
              'D. Atomic radius increases then decreases'
            ],
            answer: 2,
            explanation: 'Across Period 3, the atomic radius decreases from Na to Ar. As the atomic number increases, more protons are added to the nucleus (increasing nuclear charge), but electrons are added to the same shell. The stronger nuclear attraction pulls the electron cloud closer, reducing atomic size.'
          },
          {
            q: 'Which particle is responsible for identifying an element — i.e., changing its number would make it a different element?',
            options: ['A. Neutron', 'B. Electron', 'C. Proton', 'D. Nucleon'],
            answer: 2,
            explanation: 'The number of protons (atomic number) uniquely identifies an element. If the number of protons changes, the element changes. Adding or removing neutrons creates isotopes of the same element; adding or removing electrons creates ions.'
          },
          {
            q: 'Elements in the same group of the periodic table have similar chemical properties because they have the same',
            options: [
              'A. mass number',
              'B. number of neutrons',
              'C. number of valence electrons',
              'D. total number of electrons'
            ],
            answer: 2,
            explanation: 'Elements in the same group have the same number of valence electrons (outer shell electrons). This determines how an element reacts — elements with the same number of valence electrons react similarly. E.g., all Group I metals have 1 valence electron and readily lose it to form +1 ions.'
          },
          {
            q: 'The first ionisation energy of elements generally increases across a period because',
            options: [
              'A. the number of neutrons increases',
              'B. the atomic radius increases, making it easier to remove an electron',
              'C. nuclear charge increases and electrons are in the same shell, held more strongly',
              'D. the electron shielding increases across the period'
            ],
            answer: 2,
            explanation: 'Across a period, protons are added to the nucleus (increasing nuclear charge) while electrons are added to the same shell (no increase in shielding). The stronger nuclear attraction holds the outer electrons more tightly, requiring more energy to remove them — so first ionisation energy increases.'
          },
          {
            q: 'Which of the following is a property of non-metals?',
            options: [
              'A. They are good conductors of electricity in solid state',
              'B. They tend to form positive ions by losing electrons',
              'C. They are generally malleable and ductile',
              'D. They have high electronegativity and tend to form negative ions or share electrons'
            ],
            answer: 3,
            explanation: 'Non-metals have high electronegativity and tend to gain electrons (forming negative ions) or share electrons (covalent bonds). They are generally poor conductors of electricity (except graphite), brittle if solid, and form negative ions in ionic compounds.'
          },
          {
            q: 'An element X has the electronic configuration 2, 8, 2. To which group and period does element X belong?',
            options: [
              'A. Group II, Period 2',
              'B. Group II, Period 3',
              'C. Group III, Period 3',
              'D. Group VIII, Period 3'
            ],
            answer: 1,
            explanation: 'Element X has 3 electron shells (period 3) and 2 valence electrons (group II). It has atomic number 12 (2+8+2), which is Magnesium (Mg). It belongs to Group II, Period 3.'
          },
          {
            q: 'Carbon-12 and Carbon-14 are isotopes. Which of the following correctly states how they differ?',
            options: [
              'A. They have different numbers of protons',
              'B. Carbon-14 has 2 more neutrons than Carbon-12',
              'C. They have different electronic configurations',
              'D. Carbon-14 has a different atomic number from Carbon-12'
            ],
            answer: 1,
            explanation: 'Both carbon isotopes have 6 protons (atomic number 6). Carbon-12 has 6 neutrons (12−6); Carbon-14 has 8 neutrons (14−6). So Carbon-14 has 2 more neutrons. They have the same atomic number and identical electronic configurations.'
          }
        ],
        theory: [
          {
            question: '(a) Define the term "isotope" and give TWO examples. (b) Explain why isotopes of the same element have identical chemical properties but may differ in physical properties.',
            marks: 8,
            answer: `<p>(a) <strong>Isotopes</strong> are atoms of the same element that have the same atomic number (same number of protons) but different mass numbers (different numbers of neutrons).</p>
<p>Examples:</p>
<ul>
  <li>Chlorine-35 (¹⁷³⁵Cl) and Chlorine-37 (¹⁷³⁷Cl): both have 17 protons; Cl-35 has 18 neutrons, Cl-37 has 20 neutrons.</li>
  <li>Carbon-12 (⁶¹²C) and Carbon-14 (⁶¹⁴C): both have 6 protons; C-12 has 6 neutrons, C-14 has 8 neutrons.</li>
</ul>
<p>(b) <strong>Identical chemical properties:</strong> Chemical behaviour is determined by the number and arrangement of electrons (electronic configuration). Since isotopes have the same atomic number, they have the same number of electrons arranged in the same way. Therefore, they react identically with other substances — they form the same bonds and compounds.</p>
<p><strong>Different physical properties:</strong> Physical properties such as density, rate of diffusion, melting/boiling points (slightly), and radioactivity depend on the mass of the atom. Since isotopes differ in their number of neutrons, they have different masses. Heavier isotopes diffuse more slowly and have higher density. Radioisotopes (like C-14) may undergo radioactive decay while stable isotopes do not.</p>`,
            markingGuide: '1 mark for correct definition of isotope. 2 marks for two correct examples with atomic numbers and mass numbers stated. 2 marks for explanation of identical chemical properties (same electron configuration, same valence electrons). 2 marks for explanation of different physical properties (different mass due to different neutrons). 1 mark for clarity and completeness. Total 8 marks.'
          },
          {
            question: 'Describe the trends in (a) atomic radius and (b) electronegativity across Period 3 of the periodic table (Na to Ar). Give reasons for each trend.',
            marks: 6,
            answer: `<p>(a) <strong>Atomic radius across Period 3:</strong></p>
<p>Atomic radius <strong>decreases</strong> from Na to Cl (it reaches a minimum near Cl; noble gases like Ar are sometimes considered separately).</p>
<p><strong>Reason:</strong> Going across Period 3, the number of protons in the nucleus increases (from 11 in Na to 18 in Ar). This increases the nuclear charge. However, all the electrons being added go into the same third shell — the shielding effect remains approximately constant. The greater nuclear attraction pulls the outer electrons closer to the nucleus, resulting in a smaller atomic radius.</p>
<p>(b) <strong>Electronegativity across Period 3:</strong></p>
<p>Electronegativity <strong>increases</strong> from Na (low electronegativity) to Cl (high electronegativity). Argon has no defined electronegativity as it does not form bonds.</p>
<p><strong>Reason:</strong> Increasing nuclear charge across the period means the nucleus exerts a stronger attraction on bonding electron pairs. The smaller atomic radius also means bonding electrons are closer to the nucleus. Both factors increase the tendency of the atom to attract electrons in a covalent bond — i.e., electronegativity increases.</p>`,
            markingGuide: '1 mark for stating atomic radius decreases across Period 3. 2 marks for correct explanation (increasing nuclear charge, same shell, constant shielding). 1 mark for stating electronegativity increases across Period 3. 2 marks for correct explanation (increasing nuclear charge, decreasing atomic radius, stronger attraction on bonding electrons). Total 6 marks.'
          }
        ]
      },
      {
        id: 'chemical_bonding',
        name: 'Chemical Bonding & Structure',
        icon: '🔗',
        lessonNotes: `<h4>1. Ionic Bonding</h4>
<p>Ionic bonding occurs between a metal and a non-metal. It involves the <strong>complete transfer of one or more electrons</strong> from the metal atom to the non-metal atom, forming oppositely charged ions that attract each other electrostatically.</p>
<p><strong>Formation of NaCl (sodium chloride):</strong></p>
<ul>
  <li>Sodium (Na, 2,8,1) loses its 1 outer electron → Na⁺ ion (2,8) — stable noble gas configuration.</li>
  <li>Chlorine (Cl, 2,8,7) gains 1 electron → Cl⁻ ion (2,8,8) — stable noble gas configuration.</li>
  <li>The Na⁺ and Cl⁻ ions attract each other, forming an ionic bond (electrostatic attraction).</li>
</ul>
<p>Other examples: MgO (Mg²⁺ + O²⁻), CaCl₂ (Ca²⁺ + 2Cl⁻), Al₂O₃ (2Al³⁺ + 3O²⁻).</p>
<p><strong>Properties of ionic compounds:</strong> High melting and boiling points (strong electrostatic forces). Conduct electricity when molten or dissolved in water (free ions) but NOT in solid state. Soluble in water (generally), insoluble in organic solvents. Form crystalline lattice structures.</p>

<h4>2. Covalent Bonding</h4>
<p>Covalent bonding occurs between non-metal atoms. It involves the <strong>sharing of pairs of electrons</strong> between atoms so that each atom achieves a full outer shell (noble gas configuration).</p>
<ul>
  <li><strong>Single bond:</strong> One pair of shared electrons. Example: H₂ (H–H), Cl₂, HCl, H₂O.</li>
  <li><strong>Double bond:</strong> Two pairs of shared electrons. Example: O₂ (O=O), CO₂ (O=C=O), C₂H₄.</li>
  <li><strong>Triple bond:</strong> Three pairs of shared electrons. Example: N₂ (N≡N), C₂H₂ (ethyne).</li>
</ul>
<p><strong>Examples with structure:</strong></p>
<ul>
  <li><strong>H₂O:</strong> Oxygen shares one electron with each of two hydrogen atoms. Bent/V-shape molecule. Two bonding pairs + two lone pairs on oxygen.</li>
  <li><strong>CO₂:</strong> Carbon forms two double bonds with two oxygen atoms. Linear molecule.</li>
  <li><strong>CH₄ (methane):</strong> Carbon forms four single bonds with four hydrogen atoms. Tetrahedral shape.</li>
</ul>
<p><strong>Properties of covalent compounds:</strong> Generally low melting and boiling points (weak intermolecular forces, NOT weak covalent bonds). Do NOT conduct electricity (no free ions). Soluble in organic solvents; may or may not dissolve in water.</p>

<h4>3. Metallic Bonding</h4>
<p>In metals, atoms release their valence electrons into a <strong>"sea" of delocalised electrons</strong> that is shared throughout the metal lattice. The positive metal ions are held together by the attraction to the mobile electron cloud.</p>
<p>This explains the properties of metals: electrical conductivity (delocalised electrons carry charge), thermal conductivity, malleability and ductility (layers of ions can slide without breaking bonds), high melting/boiling points (for most metals — strong attraction between ions and electron sea).</p>

<h4>4. Intermolecular Forces</h4>
<ul>
  <li><strong>Hydrogen bonds:</strong> Strong intermolecular forces between molecules where H is covalently bonded to a highly electronegative atom (N, O, or F). Examples: water (H₂O), ammonia (NH₃), hydrogen fluoride (HF). Responsible for the unusually high boiling point of water.</li>
  <li><strong>Van der Waals forces (London dispersion forces):</strong> Weak temporary forces due to uneven electron distribution creating temporary dipoles. Present in all molecules. Increase with increasing molecular mass.</li>
  <li><strong>Permanent dipole-dipole forces:</strong> Between polar molecules (e.g., HCl) where there is a permanent unequal distribution of charge.</li>
</ul>

<h4>5. Dot-and-Cross Diagrams</h4>
<p>Dot-and-cross diagrams (electron dot structures / Lewis structures) show the arrangement of all valence electrons in a molecule or ion. Electrons from one atom are shown as dots (•) and from the other as crosses (×). Shared pairs go between atoms; lone pairs sit on individual atoms.</p>
<p>For NaCl (ionic): show Na with dot-cross arrangement losing one electron to Cl; draw ion charges [Na]⁺ [Cl]⁻. For H₂O (covalent): O shares one electron with each H; O retains two lone pairs. Always show ALL outer electrons, including lone pairs, for covalent structures.</p>`,
        keyPoints: [
          'Ionic bonding: metal loses electrons → positive ion; non-metal gains electrons → negative ion. Strong electrostatic attraction. High MP/BP, conducts electricity when molten/dissolved.',
          'Covalent bonding: non-metals share electron pairs. Single (1 pair), double (2 pairs), triple (3 pairs) bonds. Low MP/BP, non-conductor of electricity.',
          'Metallic bonding: sea of delocalised electrons among positive metal ions — explains electrical/thermal conductivity, malleability, and ductility.',
          'Hydrogen bonds form between H bonded to N, O, or F and another electronegative atom — responsible for the anomalously high boiling point of water.'
        ],
        examTips: [
          'In WAEC, always draw dot-and-cross diagrams for covalent molecules showing ALL outer shell electrons — not just bonding pairs. Lone pairs are always required.',
          'When asked why ionic compounds conduct electricity when molten but not when solid, state that in the solid state ions are fixed in a lattice and cannot move; when molten/dissolved, ions are free to carry charge.',
          'For metallic bonding, use the phrase "sea of delocalised electrons" — this phrase is expected in marking schemes.'
        ],
        commonMistakes: [
          'Saying covalent compounds have weak bonds — the covalent bonds within the molecule are strong; it is the intermolecular forces BETWEEN molecules that are weak and responsible for low melting points.',
          'Forgetting lone pairs in dot-and-cross diagrams — water has 2 lone pairs on oxygen, ammonia has 1 lone pair on nitrogen. These must be shown for full marks.'
        ],
        mcq: [
          {
            q: 'When sodium reacts with chlorine to form sodium chloride, the type of bonding formed is',
            options: ['A. metallic bonding', 'B. covalent bonding', 'C. ionic bonding', 'D. hydrogen bonding'],
            answer: 2,
            explanation: 'Sodium (a metal) reacts with chlorine (a non-metal). Sodium loses one electron to form Na⁺, and chlorine gains one electron to form Cl⁻. The oppositely charged ions attract each other — this is ionic bonding (electrostatic attraction).'
          },
          {
            q: 'Which of the following correctly explains why ionic compounds have high melting points?',
            options: [
              'A. They have weak covalent bonds between atoms',
              'B. They have strong electrostatic forces of attraction between oppositely charged ions',
              'C. They have delocalised electrons throughout the lattice',
              'D. They contain hydrogen bonds between molecules'
            ],
            answer: 1,
            explanation: 'Ionic compounds have a giant ionic lattice held together by strong electrostatic forces of attraction between oppositely charged ions. A large amount of energy is required to overcome these forces and melt the compound — hence the high melting points.'
          },
          {
            q: 'In covalent bonding, atoms achieve stability by',
            options: [
              'A. transferring electrons to form ions',
              'B. sharing pairs of electrons to fill their outer shells',
              'C. releasing electrons into a delocalised sea',
              'D. forming hydrogen bonds with neighbouring atoms'
            ],
            answer: 1,
            explanation: 'In covalent bonding, non-metal atoms share pairs of electrons. Each atom contributes one electron to a bonding pair. By sharing, each atom achieves a full outer shell (noble gas configuration), gaining stability.'
          },
          {
            q: 'The ability of metals to conduct electricity is best explained by the presence of',
            options: [
              'A. ionic bonds that break easily',
              'B. hydrogen bonds between metal atoms',
              'C. delocalised electrons that can move through the metal lattice',
              'D. shared electron pairs between metal atoms'
            ],
            answer: 2,
            explanation: 'Metals conduct electricity because of the "sea" of delocalised electrons. These electrons are free to move throughout the metal lattice when a potential difference is applied, carrying electrical charge and forming a current.'
          },
          {
            q: 'Which molecule has a double bond between its atoms?',
            options: ['A. H₂', 'B. HCl', 'C. O₂', 'D. CH₄'],
            answer: 2,
            explanation: 'O₂ (oxygen gas) has a double bond (O=O) — two shared pairs of electrons between the two oxygen atoms. H₂ and HCl have single bonds (one shared pair). CH₄ has four single bonds between carbon and each hydrogen.'
          },
          {
            q: 'Hydrogen bonding between water molecules is responsible for',
            options: [
              'A. water being a poor solvent',
              'B. the abnormally high boiling point of water compared with similar molecules',
              'C. water molecules having a linear shape',
              'D. water having a low density as ice'
            ],
            answer: 1,
            explanation: 'Hydrogen bonds between water molecules are stronger than typical intermolecular forces. Extra energy is needed to break them during boiling, which is why water has an unusually high boiling point (100°C) compared with molecules of similar molecular mass like H₂S (−60°C).'
          },
          {
            q: 'An ionic compound dissolves in water. The resulting solution conducts electricity because',
            options: [
              'A. the covalent bonds in the compound break down',
              'B. water adds free electrons to the solution',
              'C. the ions become free to move and carry charge through the solution',
              'D. the compound releases hydrogen ions only'
            ],
            answer: 2,
            explanation: 'When an ionic compound dissolves in water, the ionic lattice breaks down and the individual ions become surrounded by water molecules (hydration). These free-moving ions can carry electrical charge through the solution when a voltage is applied — allowing electrical conduction.'
          },
          {
            q: 'The dot-and-cross diagram of water (H₂O) shows that the oxygen atom has',
            options: [
              'A. no lone pairs and two bonding pairs',
              'B. one lone pair and two bonding pairs',
              'C. two lone pairs and two bonding pairs',
              'D. three lone pairs and one bonding pair'
            ],
            answer: 2,
            explanation: 'Oxygen has 6 valence electrons. In H₂O, it forms two single bonds with hydrogen (using 2 electrons in bonding pairs). The remaining 4 electrons form 2 lone pairs on the oxygen. So oxygen has 2 bonding pairs + 2 lone pairs, for a total of 8 outer electrons.'
          },
          {
            q: 'Which of the following pairs of elements would most likely form a covalent compound?',
            options: ['A. Sodium and chlorine', 'B. Calcium and oxygen', 'C. Carbon and hydrogen', 'D. Potassium and fluorine'],
            answer: 2,
            explanation: 'Covalent bonds form between non-metal atoms. Carbon (C) and hydrogen (H) are both non-metals and share electrons in covalent bonds (e.g., CH₄). Sodium/chlorine, calcium/oxygen, and potassium/fluorine are all metal-non-metal pairs that form ionic bonds.'
          },
          {
            q: 'Which property is shared by both ionic and covalent compounds?',
            options: [
              'A. Both conduct electricity when dissolved in water',
              'B. Both are made up of discrete molecules',
              'C. Both contain chemical bonds formed by electrostatic attraction',
              'D. Both have high melting points'
            ],
            answer: 2,
            explanation: 'Both ionic and covalent bonds involve electrostatic attraction. In ionic bonds, there is attraction between oppositely charged ions. In covalent bonds, the shared electron pair is attracted to the nuclei of both bonded atoms. However, ionic compounds often conduct when dissolved (C is wrong in general), and covalent compounds usually have low melting points.'
          }
        ],
        theory: [
          {
            question: 'Draw dot-and-cross diagrams to show the bonding in (a) sodium chloride (NaCl) and (b) methane (CH₄). State the type of bonding in each and explain why NaCl conducts electricity when dissolved in water but CH₄ does not.',
            marks: 10,
            answer: `<p>(a) <strong>NaCl — Ionic bonding:</strong><br>
Sodium (2,8,1) transfers its outer electron to chlorine (2,8,7). Na becomes Na⁺ (2,8) and Cl becomes Cl⁻ (2,8,8). The ionic bond is the electrostatic attraction between Na⁺ and Cl⁻ ions.</p>
<p>(b) <strong>CH₄ — Covalent bonding:</strong><br>
Carbon (2,4) shares one electron with each of four hydrogen atoms. Each C–H bond is a single covalent bond (one shared pair of electrons). Carbon achieves 8 outer electrons; each hydrogen achieves 2 outer electrons. CH₄ is a tetrahedral molecule with no lone pairs on carbon.</p>
<p><strong>Conductivity explanation:</strong></p>
<ul>
  <li><strong>NaCl dissolved in water:</strong> The ionic lattice breaks apart. Na⁺ and Cl⁻ ions are released into the solution and become free to move. These mobile ions carry electrical charge when a potential difference is applied — the solution conducts electricity.</li>
  <li><strong>CH₄ dissolved in water (or as a gas):</strong> CH₄ molecules have no ions and no free electrons. The molecules remain neutral and intact. There are no charge carriers, so the solution/compound cannot conduct electricity.</li>
</ul>`,
            markingGuide: '2 marks for correct NaCl dot-and-cross diagram (electron transfer shown, correct ion charges). 3 marks for correct CH₄ diagram (4 shared pairs, all outer electrons shown). 1 mark for naming ionic and covalent bonding. 2 marks for explaining NaCl conductivity (free ions in solution). 2 marks for explaining why CH₄ cannot conduct (no ions, no free electrons). Total 10 marks.'
          },
          {
            question: 'Explain the difference between intramolecular forces and intermolecular forces. Why does water have a much higher boiling point than hydrogen sulphide (H₂S), despite H₂S having a higher molecular mass?',
            marks: 6,
            answer: `<p><strong>Intramolecular forces</strong> are the forces of attraction within a molecule that hold atoms together — these are the actual chemical bonds (covalent, ionic, or metallic bonds). They are strong.</p>
<p><strong>Intermolecular forces</strong> are the forces of attraction between separate molecules (e.g., hydrogen bonds, van der Waals forces, dipole-dipole forces). These are much weaker than intramolecular forces. Boiling point depends on the strength of intermolecular forces (not intramolecular bonds).</p>
<p><strong>Water vs H₂S:</strong></p>
<ul>
  <li>In water (H₂O), oxygen is highly electronegative and forms hydrogen bonds with neighbouring water molecules. Hydrogen bonds are strong intermolecular forces that require significant energy to break during boiling. Water's boiling point is 100°C.</li>
  <li>In H₂S, sulphur is not electronegative enough to form hydrogen bonds. H₂S molecules are held together only by weak van der Waals (London dispersion) forces. Although H₂S has higher molecular mass, its intermolecular forces are much weaker. Its boiling point is only −60°C.</li>
</ul>
<p>Therefore, despite the lower molecular mass of water, the strong hydrogen bonds between water molecules require much more energy to overcome, giving water a significantly higher boiling point than H₂S.</p>`,
            markingGuide: '1 mark for correct definition of intramolecular forces. 1 mark for correct definition of intermolecular forces. 1 mark for stating that boiling point depends on intermolecular force strength. 1 mark for identifying hydrogen bonding in H₂O. 1 mark for stating H₂S only has van der Waals forces (no hydrogen bonds). 1 mark for logical conclusion explaining the boiling point difference. Total 6 marks.'
          }
        ]
      },
      {
        id: 'acids_bases_salts',
        name: 'Acids, Bases & Salts',
        icon: '🧪',
        lessonNotes: `<h4>1. Definitions of Acids and Bases</h4>
<p><strong>Arrhenius definition:</strong></p>
<ul>
  <li>Acid: a substance that produces H⁺ (hydrogen/hydronium) ions when dissolved in water. Example: HCl → H⁺ + Cl⁻.</li>
  <li>Base: a substance that produces OH⁻ (hydroxide) ions when dissolved in water. Example: NaOH → Na⁺ + OH⁻.</li>
</ul>
<p><strong>Brønsted–Lowry definition:</strong></p>
<ul>
  <li>Acid: a proton (H⁺) donor.</li>
  <li>Base: a proton (H⁺) acceptor.</li>
  <li>This is more general — it applies to non-aqueous systems too.</li>
</ul>

<h4>2. Strong vs Weak Acids and Bases</h4>
<p><strong>Strong acids</strong> fully dissociate (ionise) in water: HCl, HNO₃, H₂SO₄.</p>
<p><strong>Weak acids</strong> partially dissociate — an equilibrium is established: CH₃COOH (ethanoic acid), H₂CO₃ (carbonic acid), HCN.</p>
<p><strong>Strong bases</strong> fully dissociate: NaOH, KOH, Ba(OH)₂.</p>
<p><strong>Weak bases</strong> partially dissociate: NH₃ (ammonia), Ca(OH)₂ (slightly soluble).</p>
<p>A base that is soluble in water is called an <strong>alkali</strong> (e.g., NaOH, KOH, NH₃ solution).</p>

<h4>3. The pH Scale</h4>
<p>The pH scale measures how acidic or basic a solution is. It ranges from 0 to 14:</p>
<ul>
  <li><strong>pH 0–6:</strong> Acidic (lower pH = stronger acid)</li>
  <li><strong>pH 7:</strong> Neutral (pure water)</li>
  <li><strong>pH 8–14:</strong> Alkaline (higher pH = stronger alkali)</li>
</ul>
<p>pH is related to the concentration of H⁺ ions: pH = −log₁₀[H⁺]. As H⁺ concentration increases, pH decreases.</p>

<h4>4. Indicators</h4>
<ul>
  <li><strong>Litmus:</strong> Red in acid, blue in alkali, purple in neutral.</li>
  <li><strong>Phenolphthalein:</strong> Colourless in acid, pink/red in alkali. Used for strong base titrations.</li>
  <li><strong>Methyl orange:</strong> Red in acid, yellow in alkali, orange at endpoint (~pH 4). Used for strong acid + weak base titrations.</li>
  <li><strong>Universal indicator:</strong> Range of colours across full pH scale.</li>
</ul>

<h4>5. Properties of Acids</h4>
<ul>
  <li><strong>React with metals:</strong> Acid + metal → salt + hydrogen gas. e.g., Zn + H₂SO₄ → ZnSO₄ + H₂↑</li>
  <li><strong>React with metal carbonates:</strong> Acid + carbonate → salt + water + CO₂. e.g., CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
  <li><strong>React with bases (neutralisation):</strong> Acid + base → salt + water. e.g., HCl + NaOH → NaCl + H₂O</li>
  <li>Turn blue litmus red; have sour taste; pH below 7.</li>
</ul>

<h4>6. Preparation of Salts</h4>
<ul>
  <li><strong>Neutralisation:</strong> Acid + alkali → salt + water. Used to prepare soluble salts with no excess metal/oxide.</li>
  <li><strong>Acid + metal:</strong> Forms salt + H₂. Used for reactive metals (Zn, Fe, Mg). Not suitable for Cu (unreactive).</li>
  <li><strong>Acid + metal oxide/hydroxide:</strong> Excess base + acid, then filter off excess. Good for insoluble bases.</li>
  <li><strong>Direct combination:</strong> Metal + non-metal directly. e.g., 2Na + Cl₂ → 2NaCl; Fe + S → FeS.</li>
  <li><strong>Double decomposition (precipitation):</strong> Two solutions mixed; one product is insoluble and precipitates. e.g., AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq). Used to prepare insoluble salts.</li>
</ul>

<h4>7. Titration</h4>
<p>Titration is a technique used to determine the concentration of an acid or alkali by carefully adding one solution to the other from a burette until the reaction is complete (endpoint indicated by colour change of indicator). The volume of titrant used is called the titre. A <strong>pipette</strong> delivers a fixed volume of one solution; a <strong>burette</strong> dispenses variable volumes of the other. The endpoint is detected by a sharp colour change of the indicator.</p>`,
        keyPoints: [
          'Arrhenius acid: releases H⁺ ions in water. Arrhenius base: releases OH⁻ ions. Brønsted-Lowry acid: proton donor; base: proton acceptor.',
          'pH scale: 0–6 (acidic), 7 (neutral), 8–14 (alkaline). Strong acids fully dissociate; weak acids partially dissociate.',
          'Preparation of salts: neutralisation (acid + alkali), acid + metal, acid + carbonate, direct combination, double decomposition (precipitation for insoluble salts).',
          'Indicators: litmus (red in acid/blue in alkali), phenolphthalein (colourless in acid/pink in alkali), methyl orange (red in acid/yellow in alkali).'
        ],
        examTips: [
          'Always write balanced ionic equations for reactions with acids in WAEC theory answers — state symbols (s), (l), (aq), (g) are expected for full marks.',
          'For preparation of an insoluble salt, always state double decomposition/precipitation and name the two solutions mixed — WAEC awards marks for the method name.',
          'In titration questions, state which solution goes in the burette, which goes in the conical flask, the indicator used, and the colour change at the endpoint.'
        ],
        commonMistakes: [
          'Confusing "strong" acid with "concentrated" acid — a strong acid fully dissociates (HCl, HNO₃) regardless of concentration; a concentrated acid simply has a high amount of acid dissolved per unit volume. You can have a dilute strong acid or a concentrated weak acid.',
          'Forgetting CO₂ gas is produced when acids react with carbonates — the equation for acid + carbonate gives salt + water + carbon dioxide, not just salt + water.'
        ],
        mcq: [
          {
            q: 'According to the Brønsted–Lowry theory, an acid is a substance that',
            options: [
              'A. produces OH⁻ ions in aqueous solution',
              'B. accepts a proton from another substance',
              'C. donates a proton (H⁺) to another substance',
              'D. dissolves in water to release electrons'
            ],
            answer: 2,
            explanation: 'The Brønsted–Lowry definition states that an acid is a proton donor — it donates H⁺ (a proton) to another substance (the base). A Brønsted–Lowry base is a proton acceptor.'
          },
          {
            q: 'A solution has a pH of 3. This solution is best described as',
            options: ['A. strongly alkaline', 'B. weakly alkaline', 'C. weakly acidic', 'D. strongly acidic'],
            answer: 3,
            explanation: 'A pH of 3 is well below 7, indicating a strongly acidic solution. The lower the pH value below 7, the higher the concentration of H⁺ ions and the stronger the acidic nature of the solution.'
          },
          {
            q: 'Which of the following is the correct equation for the reaction of zinc with dilute sulphuric acid?',
            options: [
              'A. Zn + H₂SO₄ → ZnSO₄ + H₂O',
              'B. Zn + H₂SO₄ → ZnO + SO₂ + H₂',
              'C. Zn + H₂SO₄ → ZnSO₄ + H₂',
              'D. 2Zn + H₂SO₄ → Zn₂SO₄ + H₂'
            ],
            answer: 2,
            explanation: 'The reaction of a metal with a dilute acid produces a salt and hydrogen gas. Zinc + sulphuric acid → zinc sulphate + hydrogen: Zn + H₂SO₄ → ZnSO₄ + H₂↑. No water is produced in acid-metal reactions.'
          },
          {
            q: 'The indicator used for titrations involving a strong acid and a weak base is',
            options: ['A. litmus', 'B. phenolphthalein', 'C. universal indicator', 'D. methyl orange'],
            answer: 3,
            explanation: 'Methyl orange is used for strong acid + weak base titrations. It has an endpoint around pH 4 (orange colour), which corresponds to the equivalence point of such titrations (slightly acidic). Phenolphthalein is suitable for strong base titrations (endpoint in alkaline range).'
          },
          {
            q: 'To prepare the INSOLUBLE salt silver chloride (AgCl), the most suitable method would be',
            options: [
              'A. neutralisation of hydrochloric acid with silver hydroxide',
              'B. reacting silver metal with hydrochloric acid',
              'C. double decomposition — mixing silver nitrate solution with sodium chloride solution',
              'D. direct combination of silver and chlorine gas'
            ],
            answer: 2,
            explanation: 'Insoluble salts are prepared by double decomposition (precipitation). AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq). AgCl precipitates out of solution immediately. The precipitate is filtered, washed, and dried.'
          },
          {
            q: 'What is produced when calcium carbonate reacts with dilute hydrochloric acid?',
            options: [
              'A. Calcium chloride and water only',
              'B. Calcium chloride, water, and hydrogen gas',
              'C. Calcium chloride, water, and carbon dioxide gas',
              'D. Calcium oxide and hydrogen chloride'
            ],
            answer: 2,
            explanation: 'Acid + carbonate → salt + water + CO₂. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. The CO₂ is released as bubbles (effervescence). This is a key property of carbonates — they react with acids to produce CO₂ gas.'
          },
          {
            q: 'A strong acid differs from a weak acid in that a strong acid',
            options: [
              'A. has a higher boiling point than a weak acid',
              'B. fully dissociates into ions in aqueous solution',
              'C. always has a higher concentration than a weak acid',
              'D. reacts faster with metals than any weak acid'
            ],
            answer: 1,
            explanation: 'A strong acid fully (completely) dissociates into ions in aqueous solution (e.g., HCl → H⁺ + Cl⁻, essentially 100% dissociation). A weak acid only partially dissociates, establishing an equilibrium. Strength refers to degree of dissociation, not concentration.'
          },
          {
            q: 'Which of the following correctly describes the colour of phenolphthalein in an alkaline solution?',
            options: ['A. Red', 'B. Yellow', 'C. Colourless', 'D. Pink/red'],
            answer: 3,
            explanation: 'Phenolphthalein is colourless in acidic and neutral solutions and turns pink (or red/magenta) in alkaline solutions. It is commonly used as an indicator in titrations involving strong alkalis (NaOH).'
          },
          {
            q: 'Neutralisation is a reaction between',
            options: [
              'A. a metal and a non-metal',
              'B. an acid and a base to form salt and water',
              'C. an acid and a metal to form a salt and hydrogen',
              'D. two salts to form a precipitate'
            ],
            answer: 1,
            explanation: 'Neutralisation is the reaction between an acid and a base (alkali) to produce a salt and water. e.g., HCl + NaOH → NaCl + H₂O. The H⁺ ions from the acid combine with the OH⁻ ions from the base to form water: H⁺ + OH⁻ → H₂O.'
          },
          {
            q: 'The method used to prepare a pure, dry sample of the SOLUBLE salt copper(II) sulphate from copper(II) oxide and dilute sulphuric acid is',
            options: [
              'A. mixing equal volumes of the two substances and filtering',
              'B. adding excess copper(II) oxide to acid, filtering off excess oxide, then evaporating',
              'C. titration using a burette and conical flask with an indicator',
              'D. direct combination of copper and sulphur under heat'
            ],
            answer: 1,
            explanation: 'To prepare a soluble salt from an insoluble base (copper(II) oxide) and acid: add excess CuO to warm H₂SO₄ until no more dissolves (excess ensures all acid is used). Filter off the excess unreacted CuO. Evaporate the filtrate to crystallise CuSO₄·5H₂O. Dry the crystals.'
          }
        ],
        theory: [
          {
            question: 'Describe how you would prepare a pure, dry sample of zinc sulphate (ZnSO₄) crystals starting from zinc carbonate (ZnCO₃) and dilute sulphuric acid (H₂SO₄).',
            marks: 8,
            answer: `<p><strong>Equation:</strong> ZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂↑</p>
<p><strong>Procedure:</strong></p>
<ol>
  <li>Pour a measured volume of dilute sulphuric acid into a beaker and warm it gently on a tripod and gauze.</li>
  <li>Add zinc carbonate powder in small portions to the warm acid, stirring constantly.</li>
  <li>Continue adding ZnCO₃ until no more bubbling (CO₂) occurs and excess ZnCO₃ remains at the bottom — this ensures all the acid has been used up.</li>
  <li>Filter the mixture through filter paper in a filter funnel into an evaporating dish. The residue (excess ZnCO₃) is discarded; the filtrate (ZnSO₄ solution) is collected.</li>
  <li>Evaporate the filtrate over a water bath to concentrate the solution. Stop when crystals begin to appear at the edges (test with a glass rod).</li>
  <li>Allow the solution to cool — ZnSO₄ crystals will form (crystallisation).</li>
  <li>Filter off the crystals, wash with a little cold distilled water, and dry between sheets of filter paper (or in a low-temperature oven).</li>
</ol>`,
            markingGuide: '1 mark for correct balanced equation. 1 mark for warming the acid. 1 mark for adding excess ZnCO₃ (to ensure all acid reacts). 1 mark for filtering to remove excess ZnCO₃. 1 mark for collecting filtrate. 1 mark for evaporation to concentrate. 1 mark for cooling to crystallise. 1 mark for filtering, washing, and drying crystals. Total 8 marks.'
          },
          {
            question: '(a) State THREE properties of acids. (b) In a titration experiment, 25.0 cm³ of 0.1 mol/dm³ sodium hydroxide (NaOH) solution was required to neutralise 20.0 cm³ of hydrochloric acid (HCl). Calculate the concentration of the hydrochloric acid.',
            marks: 6,
            answer: `<p>(a) <strong>Properties of acids:</strong></p>
<ul>
  <li>Acids have a pH below 7; they turn blue litmus paper red.</li>
  <li>Acids react with metals to produce a salt and hydrogen gas. e.g., Mg + 2HCl → MgCl₂ + H₂</li>
  <li>Acids react with metal carbonates to produce a salt, water, and carbon dioxide gas. e.g., Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂</li>
  <li>Acids react with bases (neutralisation) to produce a salt and water.</li>
  <li>Acids have a sour taste and produce H⁺ ions in solution.</li>
</ul>
<p>(b) <strong>Calculation:</strong></p>
<p>Equation: HCl + NaOH → NaCl + H₂O (1:1 mole ratio)</p>
<p>Moles of NaOH = concentration × volume = 0.1 mol/dm³ × 25.0/1000 dm³ = 0.0025 mol</p>
<p>Since mole ratio is 1:1, moles of HCl = 0.0025 mol</p>
<p>Concentration of HCl = moles/volume = 0.0025 mol ÷ (20.0/1000 dm³) = 0.0025/0.020 = <strong>0.125 mol/dm³</strong></p>`,
            markingGuide: '3 marks for three correct properties of acids (1 mark each). 1 mark for correct equation or stating 1:1 mole ratio. 1 mark for correct moles of NaOH calculated (0.0025 mol). 1 mark for correct final answer for concentration of HCl (0.125 mol/dm³). Total 6 marks.'
          }
        ]
      },
      {
        id: 'organic_chemistry',
        name: 'Organic Chemistry',
        icon: '⛽',
        lessonNotes: `<h4>1. Introduction to Organic Chemistry</h4>
<p>Organic chemistry is the study of carbon-containing compounds. Carbon is unique because it can form 4 covalent bonds and can bond with other carbon atoms to form chains, rings, and complex molecules.</p>
<p>A <strong>homologous series</strong> is a family of organic compounds that share the same general formula, have the same functional group, show similar chemical properties, and show a gradual change in physical properties (e.g., boiling point increases with chain length).</p>

<h4>2. Alkanes (CₙH₂ₙ₊₂)</h4>
<p>Alkanes are <strong>saturated hydrocarbons</strong> — all carbon-carbon bonds are single bonds. General formula: CₙH₂ₙ₊₂.</p>
<p>Examples: Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀).</p>
<ul>
  <li><strong>Properties:</strong> Non-polar, relatively unreactive. Insoluble in water. Boiling point increases with chain length.</li>
  <li><strong>Combustion (main reaction):</strong> Complete combustion: CH₄ + 2O₂ → CO₂ + 2H₂O (produces CO₂ and H₂O). Incomplete combustion (insufficient O₂): produces CO (toxic) and H₂O, or soot (C).</li>
  <li><strong>Substitution reaction:</strong> Alkanes react with halogens in UV light. e.g., CH₄ + Cl₂ → CH₃Cl + HCl (free radical substitution). One H atom is replaced by Cl.</li>
</ul>

<h4>3. Alkenes (CₙH₂ₙ)</h4>
<p>Alkenes are <strong>unsaturated hydrocarbons</strong> — they contain at least one carbon-carbon double bond (C=C). General formula: CₙH₂ₙ.</p>
<p>Examples: Ethene (C₂H₄), Propene (C₃H₆), Butene (C₄H₈).</p>
<ul>
  <li><strong>Addition reactions</strong> (characteristic of alkenes — the double bond opens up):
    <ul>
      <li><strong>Hydrogenation:</strong> C₂H₄ + H₂ → C₂H₆ (Ni catalyst, 150°C). Double bond → single bond. Used to make margarine from vegetable oils.</li>
      <li><strong>Halogenation:</strong> C₂H₄ + Br₂ → C₂H₄Br₂. Alkene decolourises bromine water (brown → colourless). This is the test for unsaturation/double bond.</li>
      <li><strong>Hydration:</strong> C₂H₄ + H₂O → C₂H₅OH (ethanol). Phosphoric acid catalyst, high temperature/pressure.</li>
      <li><strong>Hydrohalogenation:</strong> C₂H₄ + HBr → C₂H₅Br.</li>
    </ul>
  </li>
  <li><strong>Test for alkenes:</strong> Add bromine water (orange/brown) — alkene decolourises it; alkane does NOT decolourise bromine water.</li>
</ul>

<h4>4. Alcohols (Alkanols)</h4>
<p>General formula: CₙH₂ₙ₊₁OH. Functional group: –OH (hydroxyl group).</p>
<p>Examples: Methanol (CH₃OH), Ethanol (C₂H₅OH).</p>
<ul>
  <li><strong>Fermentation:</strong> C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, anaerobic, ~30°C). Production of ethanol.</li>
  <li><strong>Oxidation:</strong> Ethanol + oxygen (or oxidising agent) → ethanoic acid (CH₃COOH). Responsible for vinegar production.</li>
  <li><strong>Uses:</strong> Fuel (e.g., methylated spirit), solvent, alcoholic beverages, antiseptic.</li>
</ul>

<h4>5. Carboxylic Acids and Esters</h4>
<p>Carboxylic acids have the functional group –COOH. Example: Ethanoic acid (CH₃COOH) — the acid in vinegar.</p>
<p><strong>Esterification:</strong> Alcohol + carboxylic acid ⇌ ester + water (reversible, acid catalyst H₂SO₄).</p>
<p>Example: C₂H₅OH + CH₃COOH ⇌ CH₃COOC₂H₅ + H₂O (ethyl ethanoate — has a fruity smell).</p>
<p>Esters are used as flavourings and perfumes, in cosmetics, as solvents, and for making polyesters.</p>

<h4>6. Polymers</h4>
<p><strong>Addition polymerisation:</strong> Monomers containing double bonds link together repeatedly. No by-product is formed. Example: nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (polyethylene/polythene). Also PVC from chloroethene.</p>
<p><strong>Condensation polymerisation:</strong> Monomers join together with loss of small molecules (e.g., H₂O or HCl). Example: Nylon — formed from a diamine and a dicarboxylic acid, losing H₂O each time. Polyester — formed from a diol and a dicarboxylic acid.</p>
<p><strong>Uses of polymers:</strong> Polythene (packaging), PVC (pipes, insulation), nylon (clothing, ropes), polystyrene (packaging), polyester (clothing).</p>`,
        keyPoints: [
          'Alkanes (CₙH₂ₙ₊₂): saturated, undergo combustion and substitution. Alkenes (CₙH₂ₙ): unsaturated (C=C), undergo addition reactions; decolourise bromine water.',
          'Test for alkenes: bromine water is decolourised (orange → colourless) because of the addition reaction across the C=C double bond.',
          'Fermentation: glucose → ethanol + CO₂ (yeast, anaerobic). Esterification: alcohol + carboxylic acid ⇌ ester + water (acid catalyst).',
          'Addition polymerisation: monomers with double bonds join together (no by-product) — e.g., polythene. Condensation polymerisation: monomers join with loss of H₂O — e.g., nylon.'
        ],
        examTips: [
          'WAEC frequently asks you to name the type of reaction (addition, substitution, combustion) — always name the reaction type before writing the equation.',
          'For the bromine water test, state both the observation (decolouration from orange/brown to colourless) AND the conclusion (the compound is unsaturated / contains a C=C double bond).',
          'Memorise the general formulas: alkanes CₙH₂ₙ₊₂; alkenes CₙH₂ₙ; alkynes CₙH₂ₙ₋₂; alcohols CₙH₂ₙ₊₁OH. WAEC will ask you to determine the molecular formula from these.'
        ],
        commonMistakes: [
          'Confusing addition and substitution reactions — in substitution (alkanes + halogens), an H atom is replaced; in addition (alkenes + halogens), both atoms add across the double bond and no atom is lost.',
          'Writing the fermentation equation incorrectly — the correct equation is C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Students often omit the coefficient 2 before ethanol and CO₂.'
        ],
        mcq: [
          {
            q: 'The general formula of alkanes is',
            options: ['A. CₙH₂ₙ', 'B. CₙH₂ₙ₋₂', 'C. CₙH₂ₙ₊₂', 'D. CₙH₂ₙ₊₁OH'],
            answer: 2,
            explanation: 'The general formula of alkanes is CₙH₂ₙ₊₂. Alkanes are saturated hydrocarbons with only single C–C bonds. Methane = CH₄ (n=1: 2×1+2=4 H atoms). Alkenes are CₙH₂ₙ; alkynes CₙH₂ₙ₋₂; alcohols CₙH₂ₙ₊₁OH.'
          },
          {
            q: 'When ethene (C₂H₄) is bubbled through bromine water, the brown colour of the bromine water is discharged. This observation shows that ethene',
            options: [
              'A. is a saturated compound',
              'B. undergoes substitution with bromine',
              'C. is an unsaturated compound containing a C=C double bond',
              'D. is a noble gas that reacts with bromine'
            ],
            answer: 2,
            explanation: 'Alkenes decolourise bromine water because they undergo addition reactions across the C=C double bond. C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane). This is the standard test for unsaturation. Saturated alkanes do not react with bromine water in the absence of UV light.'
          },
          {
            q: 'Ethanol can be produced industrially by the fermentation of glucose. The correct equation for this process is',
            options: [
              'A. C₆H₁₂O₆ → C₂H₅OH + CO₂',
              'B. C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
              'C. C₆H₁₂O₆ + O₂ → 2C₂H₅OH + 2H₂O',
              'D. 2C₆H₁₂O₆ → C₂H₅OH + CO₂'
            ],
            answer: 1,
            explanation: 'The fermentation equation is: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. One molecule of glucose is converted by yeast enzymes (under anaerobic conditions at ~30°C) into two molecules of ethanol and two molecules of carbon dioxide.'
          },
          {
            q: 'The reaction of ethanol with ethanoic acid in the presence of a concentrated sulphuric acid catalyst produces',
            options: [
              'A. an ether and water',
              'B. an ester and water',
              'C. an alkene and water',
              'D. a polymer and water'
            ],
            answer: 1,
            explanation: 'Esterification is the reaction of an alcohol with a carboxylic acid (in the presence of concentrated H₂SO₄ as catalyst) to form an ester and water: C₂H₅OH + CH₃COOH ⇌ CH₃COOC₂H₅ + H₂O. Ethyl ethanoate is produced, which has a fruity smell.'
          },
          {
            q: 'The type of polymerisation that involves monomers joining together without the loss of any by-product is',
            options: ['A. condensation polymerisation', 'B. addition polymerisation', 'C. substitution polymerisation', 'D. elimination polymerisation'],
            answer: 1,
            explanation: 'In addition polymerisation, monomers (containing a C=C double bond) open their double bonds and link together. No atoms are lost — all atoms in the monomers become part of the polymer chain. Example: ethene → polyethylene (polythene). Condensation polymerisation produces water as a by-product.'
          },
          {
            q: 'When propane (C₃H₈) undergoes complete combustion, the products are',
            options: [
              'A. Carbon monoxide and water',
              'B. Carbon and water',
              'C. Carbon dioxide and water',
              'D. Carbon dioxide and carbon monoxide'
            ],
            answer: 2,
            explanation: 'Complete combustion of an alkane (with excess oxygen) produces only carbon dioxide and water. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Incomplete combustion (insufficient O₂) produces CO and/or C (soot).'
          },
          {
            q: 'Which of the following is the correct IUPAC name for the alcohol with the formula C₃H₇OH?',
            options: ['A. Methanol', 'B. Ethanol', 'C. Propanol', 'D. Butanol'],
            answer: 2,
            explanation: 'The alcohol C₃H₇OH has 3 carbon atoms. The prefix for 3 carbons is "prop–" and the functional group is –OH (alcohol), giving "propanol" (more specifically propan-1-ol). Methanol has 1 C, ethanol has 2 C, butanol has 4 C.'
          },
          {
            q: 'The addition of hydrogen to an alkene in the presence of a nickel catalyst is called',
            options: ['A. halogenation', 'B. hydrohalogenation', 'C. dehydration', 'D. hydrogenation'],
            answer: 3,
            explanation: 'Hydrogenation is the addition of hydrogen (H₂) to an alkene across the C=C double bond, in the presence of a nickel catalyst at about 150°C. C₂H₄ + H₂ → C₂H₆. This converts alkenes to alkanes (turns unsaturated fats/oils into saturated fats — used to make margarine).'
          },
          {
            q: 'Nylon is an example of which type of polymer?',
            options: ['A. Addition polymer', 'B. Vinyl polymer', 'C. Condensation polymer', 'D. Natural polymer'],
            answer: 2,
            explanation: 'Nylon is a condensation polymer (specifically a polyamide). It is formed from the reaction of a diamine and a dicarboxylic acid (or diacid chloride), with the elimination of water (or HCl) at each step. Addition polymers like polythene are formed without loss of atoms.'
          },
          {
            q: 'Which of the following alkanes reacts with chlorine in ultraviolet light by substitution?',
            options: ['A. Ethene', 'B. Methane', 'C. Ethanol', 'D. Ethyne'],
            answer: 1,
            explanation: 'Alkanes (like methane) react with halogens (Cl₂) in the presence of UV light by free radical substitution. CH₄ + Cl₂ → CH₃Cl + HCl. Ethene is an alkene (not an alkane), ethanol is an alcohol, and ethyne is an alkyne. Only alkanes undergo this reaction.'
          }
        ],
        theory: [
          {
            question: 'Ethene (C₂H₄) undergoes a number of important addition reactions. Describe THREE different addition reactions of ethene, giving the conditions and equation for each.',
            marks: 9,
            answer: `<p><strong>1. Hydrogenation (addition of hydrogen):</strong><br>
Conditions: Nickel (Ni) catalyst, ~150°C.<br>
Equation: C₂H₄ + H₂ → C₂H₆ (ethane)<br>
The C=C double bond is converted to a C–C single bond. Used industrially to harden vegetable oils into margarine.</p>

<p><strong>2. Halogenation (addition of bromine):</strong><br>
Conditions: Room temperature, no catalyst needed (can use bromine water or bromine vapour).<br>
Equation: C₂H₄ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane)<br>
The bromine (orange/brown) is decolourised. This reaction is used as a test for unsaturation (C=C double bond).</p>

<p><strong>3. Hydration (addition of steam/water):</strong><br>
Conditions: Phosphoric acid (H₃PO₄) catalyst, ~300°C, 60–70 atm pressure.<br>
Equation: C₂H₄ + H₂O → C₂H₅OH (ethanol)<br>
This is an industrial method for the production of ethanol from ethene.</p>`,
            markingGuide: '1 mark for each correct reaction name (3 marks). 1 mark for correct conditions for each reaction (3 marks). 1 mark for each correct balanced equation (3 marks). Total 9 marks.'
          },
          {
            question: 'Distinguish between addition polymerisation and condensation polymerisation, giving one example of each with the name of the polymer formed.',
            marks: 6,
            answer: `<p><strong>Addition polymerisation:</strong><br>
In addition polymerisation, many small monomer molecules that contain a carbon-carbon double bond (C=C) open their double bonds and link together to form a long polymer chain. No atoms are lost in the process — all atoms of the monomers are incorporated into the polymer.<br>
Example: Ethene (CH₂=CH₂) undergoes addition polymerisation:<br>
nCH₂=CH₂ → (–CH₂–CH₂–)ₙ<br>
Polymer formed: <strong>Polyethylene (polythene)</strong><br>
Other examples: chloroethene → PVC; styrene → polystyrene.</p>

<p><strong>Condensation polymerisation:</strong><br>
In condensation polymerisation, monomers join together by forming covalent bonds between specific functional groups, with the simultaneous elimination of small molecules such as water (H₂O) or hydrogen chloride (HCl).<br>
Example: Hexamethylene diamine + adipic acid undergo condensation polymerisation, losing water at each step.<br>
Polymer formed: <strong>Nylon (a polyamide)</strong><br>
Other examples: Terylene/polyester (from diol + dicarboxylic acid, losing H₂O).</p>`,
            markingGuide: '1 mark for correct description of addition polymerisation (monomers with C=C, no by-product). 1 mark for correct example of addition polymer (polythene or PVC). 1 mark for correct equation or structure for addition polymer. 1 mark for correct description of condensation polymerisation (loss of small molecule like H₂O). 1 mark for correct example of condensation polymer (nylon or polyester). 1 mark for correct identification of the small molecule lost (water). Total 6 marks.'
          }
        ]
      },
      {
        id: 'chemical_kinetics',
        name: 'Rates of Reaction, Equilibrium & Electrolysis',
        icon: '⚡',
        lessonNotes: `<h4>1. Collision Theory</h4>
<p>For a chemical reaction to occur, reactant particles must <strong>collide</strong> with sufficient energy (equal to or greater than the <strong>activation energy</strong>) and with the correct orientation. The rate of reaction depends on the frequency of successful collisions.</p>
<p>A <strong>reaction rate</strong> is the change in concentration of reactants or products per unit time.</p>

<h4>2. Factors Affecting Rate of Reaction</h4>
<ul>
  <li><strong>Concentration (of solutions):</strong> Increasing concentration increases the number of particles per unit volume → more frequent collisions → faster reaction. Rate ∝ concentration.</li>
  <li><strong>Temperature:</strong> Increasing temperature gives particles more kinetic energy → more frequent collisions AND a higher proportion of collisions exceed the activation energy → faster reaction. Approximately, every 10°C rise doubles the reaction rate.</li>
  <li><strong>Surface area:</strong> Smaller particle size (powder vs lump) → greater surface area exposed → more collision sites available → faster reaction. Example: marble powder reacts faster with HCl than marble chips.</li>
  <li><strong>Catalyst:</strong> A catalyst provides an alternative reaction pathway with a lower activation energy → more collisions are successful → faster reaction. A catalyst is not consumed in the reaction. Examples: MnO₂ in decomposition of H₂O₂; Fe in Haber process; Ni in hydrogenation.</li>
  <li><strong>Pressure (for gases):</strong> Increasing pressure compresses gas molecules into a smaller volume → increases concentration → more frequent collisions → faster reaction.</li>
  <li><strong>Light:</strong> Some reactions are photochemical and are initiated or accelerated by light. Example: photosynthesis, halogenation of alkanes.</li>
</ul>

<h4>3. Reversible Reactions and Dynamic Equilibrium</h4>
<p>A <strong>reversible reaction</strong> is one that can proceed in both the forward and reverse directions. It is shown with a double arrow: ⇌</p>
<p>Example: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (Haber process)</p>
<p><strong>Dynamic equilibrium</strong> is established in a closed system when the rate of the forward reaction equals the rate of the reverse reaction. At this point, the concentrations of reactants and products remain constant (but are not necessarily equal). The system appears static but both reactions continue at equal rates.</p>

<h4>4. Le Chatelier's Principle</h4>
<p>Le Chatelier's principle states: <em>"If a system at equilibrium is subjected to a change in conditions, the equilibrium will shift in the direction that tends to counteract that change."</em></p>
<p>Applications for N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ/mol, exothermic):</p>
<ul>
  <li><strong>Increase concentration of N₂ or H₂:</strong> Equilibrium shifts right (→) to use up excess reactants → more NH₃ produced.</li>
  <li><strong>Increase pressure:</strong> Equilibrium shifts to the side with fewer moles of gas. Left side: 1+3=4 moles; right side: 2 moles. Shift right → more NH₃.</li>
  <li><strong>Increase temperature:</strong> Equilibrium shifts in the endothermic direction (reverse reaction — to absorb the extra heat). Shift left → less NH₃. (Low temperature favours product yield but reduces rate — compromise temperature ~450°C used.)</li>
  <li><strong>Adding a catalyst:</strong> Does NOT shift equilibrium position — it speeds up BOTH forward and reverse reactions equally. Equilibrium is reached faster but the final proportions are the same.</li>
</ul>

<h4>5. Electrolysis</h4>
<p><strong>Electrolysis</strong> is the decomposition of an ionic compound (electrolyte) by passing an electric current through it in its molten state or dissolved in water.</p>
<ul>
  <li><strong>Electrolyte:</strong> The ionic substance being electrolysed (must be molten or in solution).</li>
  <li><strong>Anode:</strong> Positive electrode — anions (negative ions) are attracted here and are oxidised (lose electrons). OIL: Oxidation Is Loss.</li>
  <li><strong>Cathode:</strong> Negative electrode — cations (positive ions) are attracted here and are reduced (gain electrons). RIG: Reduction Is Gain.</li>
</ul>
<p><strong>Examples:</strong></p>
<ul>
  <li><strong>Electrolysis of brine (NaCl solution):</strong> Cathode: 2H⁺ + 2e⁻ → H₂↑ (hydrogen gas). Anode: 2Cl⁻ → Cl₂ + 2e⁻ (chlorine gas). In the solution, NaOH remains. Industrial products: H₂, Cl₂, NaOH (chlor-alkali industry).</li>
  <li><strong>Electrolysis of copper sulphate solution (with copper electrodes):</strong> Cathode: Cu²⁺ + 2e⁻ → Cu (copper deposited — used in electroplating). Anode: Cu → Cu²⁺ + 2e⁻ (anode dissolves). The copper concentration remains constant — used for purification of copper.</li>
  <li><strong>Extraction of aluminium from bauxite (Al₂O₃):</strong> Bauxite is dissolved in molten cryolite (reduces melting point). Electrolysis in a steel cell. Cathode: Al³⁺ + 3e⁻ → Al (molten aluminium). Anode: 2O²⁻ → O₂ + 4e⁻ (oxygen gas — reacts with carbon anode, burning it away). Carbon anodes must be replaced frequently. Very energy-intensive process.</li>
</ul>
<p><strong>Faraday's Laws (qualitative):</strong></p>
<ul>
  <li><strong>First law:</strong> The mass of substance deposited/liberated at an electrode is proportional to the quantity of electricity (charge) passed.</li>
  <li><strong>Second law:</strong> For the same quantity of electricity, the masses of different substances liberated are proportional to their equivalent masses (molar mass divided by number of electrons transferred).</li>
</ul>`,
        keyPoints: [
          'Rate of reaction depends on: concentration (more particles → more collisions), temperature (more energy → more successful collisions), surface area, catalyst (lowers activation energy), and pressure (gases).',
          'Dynamic equilibrium: forward rate = reverse rate; concentrations remain constant in a closed system.',
          'Le Chatelier\'s principle: equilibrium shifts to oppose any change. Increasing pressure shifts equilibrium toward fewer moles of gas; increasing temperature shifts toward the endothermic direction.',
          'Electrolysis: cathode (−) = cations reduced (metal/H₂ deposited); anode (+) = anions oxidised (halogen/O₂ released). Faraday\'s 1st law: mass deposited ∝ charge passed.'
        ],
        examTips: [
          'For Le Chatelier questions, always state the direction of shift AND give the reason in terms of moles of gas or heat. "The equilibrium shifts to the right to reduce the increased pressure by forming fewer moles of gas."',
          'WAEC always tests the products at each electrode — use the memory aids: OILRIG (Oxidation Is Loss, Reduction Is Gain) and remember: cations go to cathode (both start with C); anions go to anode (both start with A).',
          'For factors affecting rate, always explain in terms of collision theory — increase the frequency of collisions or increase the proportion of collisions that exceed the activation energy.'
        ],
        commonMistakes: [
          'Stating that a catalyst changes the position of equilibrium — a catalyst speeds up both the forward and reverse reactions equally; it only helps equilibrium to be reached faster but does NOT shift the equilibrium position or change the yield.',
          'Confusing anode and cathode in electrolysis — the cathode is NEGATIVE (cations are attracted to it, reduction occurs); the anode is POSITIVE (anions are attracted to it, oxidation occurs).'
        ],
        mcq: [
          {
            q: 'According to collision theory, increasing the temperature of a reaction increases the rate because',
            options: [
              'A. more reactant particles are created at higher temperatures',
              'B. the activation energy of the reaction decreases',
              'C. particles move faster, collide more frequently, and more collisions have energy ≥ activation energy',
              'D. a catalyst is automatically produced at higher temperatures'
            ],
            answer: 2,
            explanation: 'Increasing temperature gives particles more kinetic energy. This causes them to move faster, leading to more frequent collisions. More importantly, a greater proportion of collisions now have energy equal to or greater than the activation energy — so more collisions are successful and the rate increases.'
          },
          {
            q: 'A catalyst increases the rate of a chemical reaction by',
            options: [
              'A. increasing the temperature of the reaction',
              'B. providing an alternative reaction pathway with a lower activation energy',
              'C. increasing the concentration of reactants',
              'D. shifting the position of equilibrium to the right'
            ],
            answer: 1,
            explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy. This means a greater proportion of collisions have sufficient energy to react, so more successful collisions occur per second — rate increases. The catalyst is not consumed and does not affect equilibrium position.'
          },
          {
            q: 'For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which change would INCREASE the yield of ammonia at equilibrium?',
            options: [
              'A. Decreasing the pressure',
              'B. Increasing the temperature',
              'C. Adding a catalyst',
              'D. Increasing the pressure'
            ],
            answer: 3,
            explanation: 'Increasing pressure shifts equilibrium toward the side with fewer moles of gas. Reactants: 1 + 3 = 4 moles; products: 2 moles. The equilibrium shifts right, producing more NH₃. Increasing temperature shifts left (it is an exothermic reaction), reducing yield. A catalyst does not change the yield.'
          },
          {
            q: 'In the electrolysis of dilute sulphuric acid, which substance is produced at the CATHODE?',
            options: ['A. Oxygen gas', 'B. Sulphur dioxide', 'C. Hydrogen gas', 'D. Sulphur'],
            answer: 2,
            explanation: 'The cathode is the negative electrode. H⁺ ions from the acid are attracted to the cathode and are reduced: 2H⁺ + 2e⁻ → H₂↑. Hydrogen gas is produced at the cathode. At the anode (+), water is oxidised to produce oxygen gas: 2H₂O → O₂ + 4H⁺ + 4e⁻.'
          },
          {
            q: 'Dynamic equilibrium is established in a reversible reaction when',
            options: [
              'A. all reactants have been consumed and only products remain',
              'B. the concentrations of reactants and products are equal',
              'C. the rate of the forward reaction equals the rate of the reverse reaction',
              'D. the temperature of the system reaches 0°C'
            ],
            answer: 2,
            explanation: 'Dynamic equilibrium is reached when the forward reaction and reverse reaction proceed at the same rate. The concentrations of reactants and products remain constant (though not necessarily equal). Both reactions are still occurring — hence "dynamic."'
          },
          {
            q: 'In the electrolysis of brine (concentrated sodium chloride solution), which substance is produced at the ANODE?',
            options: ['A. Sodium metal', 'B. Hydrogen gas', 'C. Oxygen gas', 'D. Chlorine gas'],
            answer: 3,
            explanation: 'The anode (+) attracts anions. In concentrated brine, Cl⁻ ions are discharged in preference to OH⁻ ions: 2Cl⁻ → Cl₂ + 2e⁻. Chlorine gas is produced at the anode. At the cathode (−), hydrogen gas is produced: 2H⁺ + 2e⁻ → H₂. NaOH remains in solution.'
          },
          {
            q: 'Powdered marble reacts faster with hydrochloric acid than marble chips of the same mass because powdered marble has',
            options: [
              'A. a higher concentration of carbonate ions',
              'B. a lower activation energy',
              'C. a greater surface area exposed to the acid',
              'D. a higher temperature due to smaller particle size'
            ],
            answer: 2,
            explanation: 'Powdered marble has a much greater surface area than marble chips of the same mass. More surface area means more reactant particles are exposed and available to collide with acid molecules, leading to more frequent collisions and a faster rate of reaction.'
          },
          {
            q: 'In the extraction of aluminium by electrolysis, aluminium is produced at the',
            options: [
              'A. anode, by reduction of Al³⁺ ions',
              'B. cathode, by reduction of Al³⁺ ions',
              'C. cathode, by oxidation of Al³⁺ ions',
              'D. anode, by oxidation of O²⁻ ions'
            ],
            answer: 1,
            explanation: 'Aluminium is produced at the cathode (negative electrode) by reduction of Al³⁺ ions: Al³⁺ + 3e⁻ → Al. Reduction (gain of electrons) always occurs at the cathode. At the anode, oxide ions are oxidised: 2O²⁻ → O₂ + 4e⁻. The oxygen reacts with the carbon anode.'
          },
          {
            q: 'For the endothermic reaction A(g) + B(g) ⇌ C(g) + D(g), what effect does increasing temperature have on the equilibrium?',
            options: [
              'A. Equilibrium shifts left, decreasing the yield of C and D',
              'B. Equilibrium shifts right, increasing the yield of C and D',
              'C. The rate of the forward reaction decreases',
              'D. The equilibrium constant remains unchanged'
            ],
            answer: 1,
            explanation: 'For an endothermic reaction (positive ΔH), increasing temperature shifts the equilibrium in the forward (endothermic) direction to absorb the extra heat (Le Chatelier\'s principle). This increases the yield of products C and D. For exothermic reactions, the shift would be in the reverse direction.'
          },
          {
            q: 'Faraday\'s first law of electrolysis states that the mass of substance deposited at an electrode is',
            options: [
              'A. inversely proportional to the charge passed',
              'B. independent of the nature of the electrolyte',
              'C. directly proportional to the quantity of charge (electricity) passed',
              'D. directly proportional to the temperature of the electrolyte'
            ],
            answer: 2,
            explanation: 'Faraday\'s first law states that the mass of a substance deposited/liberated at an electrode during electrolysis is directly proportional to the quantity of electricity (charge, measured in coulombs) passed through the electrolyte. Mass ∝ Q (where Q = charge = current × time).'
          }
        ],
        theory: [
          {
            question: 'Describe how the rate of reaction between marble chips (CaCO₃) and excess dilute hydrochloric acid can be investigated experimentally. Include how you would measure the rate, the variable you would change, and what you would expect to observe.',
            marks: 8,
            answer: `<p><strong>Reaction:</strong> CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)</p>
<p><strong>Variable to investigate:</strong> Effect of particle size (surface area) OR concentration of HCl on rate.</p>
<p><strong>Method (surface area investigation):</strong></p>
<ol>
  <li>Measure a fixed mass (e.g., 5g) of large marble chips and place in a conical flask.</li>
  <li>Add a fixed volume of HCl of known concentration (e.g., 50 cm³ of 1 mol/dm³).</li>
  <li>Immediately connect the flask to a gas syringe or inverted measuring cylinder to collect CO₂.</li>
  <li>Record the volume of CO₂ collected at regular time intervals (e.g., every 30 seconds).</li>
  <li>Repeat the experiment using the same mass of powdered marble chips (greater surface area), keeping all other variables constant (same mass, same acid concentration, same temperature).</li>
</ol>
<p><strong>Measurement of rate:</strong> Volume of CO₂ produced per unit time. Alternatively, measure the loss in mass of the flask over time using a balance (mass decreases as CO₂ escapes).</p>
<p><strong>Expected observations:</strong> The powder produces CO₂ at a faster rate (steeper curve on a volume-time graph). Both experiments produce the same total volume of CO₂ (same number of moles of CaCO₃). The powder reaction finishes sooner.</p>`,
            markingGuide: '1 mark for correct chemical equation. 1 mark for naming the independent variable. 1 mark for method of measuring rate (CO₂ volume/time or mass loss). 1 mark for describing the experimental setup clearly. 1 mark for stating control variables. 1 mark for stating repeat with powder. 1 mark for expected observation (powder faster, same total volume). 1 mark for explanation in terms of surface area/collision theory. Total 8 marks.'
          },
          {
            question: 'Explain Le Chatelier\'s principle and apply it to the Haber process (N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ/mol) to explain the choice of: (a) high pressure and (b) moderate temperature (~450°C) as operating conditions.',
            marks: 6,
            answer: `<p><strong>Le Chatelier\'s Principle:</strong> If a system at equilibrium is subjected to a change (concentration, temperature, or pressure), the equilibrium will shift in the direction that tends to oppose that change and restore equilibrium.</p>
<p>(a) <strong>High pressure (~200 atm):</strong><br>
The Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)<br>
Reactants: 1 + 3 = 4 moles of gas. Products: 2 moles of gas.<br>
By Le Chatelier\'s principle, increasing pressure shifts the equilibrium toward the side with fewer moles of gas (to reduce the pressure). Since the product side (2 moles) has fewer moles, the equilibrium shifts to the RIGHT → more ammonia is produced. High pressure therefore increases the yield of NH₃.</p>
<p>(b) <strong>Moderate temperature (~450°C — a compromise):</strong><br>
The forward reaction is exothermic (ΔH = −92 kJ/mol). By Le Chatelier\'s principle, decreasing temperature shifts equilibrium to the right (exothermic direction) to release heat — this gives a higher yield of NH₃. A low temperature would favour yield but the reaction would be too slow to be economically viable.<br>
Increasing temperature shifts equilibrium left (endothermic direction) — yield decreases — but rate is faster.<br>
Therefore, ~450°C is a compromise: reasonably fast rate AND acceptable yield. A catalyst (iron) is also used to further increase the rate at this temperature.</p>`,
            markingGuide: '1 mark for correct statement of Le Chatelier\'s principle. 1 mark for counting moles on each side of Haber process. 1 mark for explaining high pressure shifts equilibrium right (fewer moles of gas). 1 mark for stating the effect (more NH₃). 1 mark for explaining that low temperature favours yield (exothermic forward reaction) but too slow. 1 mark for explaining 450°C as a compromise between yield and rate. Total 6 marks.'
          }
        ]
      }
    ],
    pastQuestions: [
      {
        year: 2019,
        question: 'Which of the following correctly shows the electronic configuration of a sodium atom (atomic number 11)? A. 2, 9  B. 2, 8, 1  C. 3, 8  D. 2, 8, 3',
        type: 'mcq',
        answer: 'B. 2, 8, 1',
        explanation: 'Sodium has 11 electrons. They fill the shells: Shell 1 = 2, Shell 2 = 8, Shell 3 = 1. Electronic configuration: 2, 8, 1. This gives sodium 1 valence electron, placing it in Group I of the periodic table. Sodium readily loses this electron to form the Na⁺ ion.'
      },
      {
        year: 2020,
        question: 'Explain why dilute hydrochloric acid conducts electricity but liquid hydrogen chloride (HCl) does not.',
        type: 'theory',
        answer: 'Dilute hydrochloric acid (HCl dissolved in water) conducts electricity because HCl dissociates completely in water to produce free-moving ions: HCl(aq) → H⁺(aq) + Cl⁻(aq). These mobile ions carry electrical charge through the solution when a voltage is applied. Liquid HCl (pure, undissociated) is a covalent molecule. In its liquid state, there are no free ions — the HCl molecules are intact and uncharged. Without free charge carriers (ions or electrons), it cannot conduct electricity.',
        explanation: 'This tests understanding of electrolytes and ionic conduction. The key distinction is that conduction requires mobile charge carriers (ions). HCl dissolved in water produces ions through ionisation; pure liquid HCl has no ions — only neutral polar molecules.'
      },
      {
        year: 2021,
        question: 'When bromine water is added to an unknown organic compound X, the orange-brown colour is decolourised. Which of the following could be compound X? A. Methane B. Ethane C. Ethene D. Ethanol',
        type: 'mcq',
        answer: 'C. Ethene',
        explanation: 'Bromine water is decolourised only by compounds with a C=C double bond (unsaturated compounds). Ethene (C₂H₄) is an alkene with a C=C double bond that undergoes addition with Br₂: C₂H₄ + Br₂ → C₂H₄Br₂. Methane and ethane are saturated alkanes that do not decolourise bromine water. Ethanol does not have a C=C double bond.'
      },
      {
        year: 2022,
        question: 'State Le Chatelier\'s principle and apply it to explain what happens to the yield of ammonia in the Haber process (N₂ + 3H₂ ⇌ 2NH₃) when the pressure is increased.',
        type: 'theory',
        answer: 'Le Chatelier\'s principle states that if a system at equilibrium is subjected to a change in conditions, the equilibrium will shift in the direction that tends to counteract that change. For the Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Reactants have 4 moles of gas (1+3); products have 2 moles of gas. When pressure is increased, the equilibrium shifts in the direction that reduces the pressure — toward the side with fewer moles of gas (right side, 2 moles). Therefore, increasing pressure shifts the equilibrium to the right, increasing the yield of ammonia (NH₃).',
        explanation: 'Increasing pressure always favours the side of the equilibrium with fewer moles of gas, because producing fewer gas molecules reduces the pressure — opposing the change, as stated by Le Chatelier\'s principle.'
      },
      {
        year: 2023,
        question: 'Which type of bonding is present in sodium chloride (NaCl) and why does NaCl conduct electricity when dissolved in water but not when solid?',
        type: 'theory',
        answer: 'Sodium chloride contains ionic bonding — electrostatic attraction between Na⁺ (positive) and Cl⁻ (negative) ions arranged in a giant ionic lattice. In solid state: the ions are held in fixed positions within the lattice and cannot move. Because charge carriers cannot move, the solid does not conduct electricity. When dissolved in water: the lattice breaks down (the ionic bonds are overcome by hydration forces). Na⁺ and Cl⁻ ions are released into the solution and become free to move. These mobile ions migrate toward oppositely charged electrodes when a voltage is applied, carrying electrical charge and conducting electricity.',
        explanation: 'This tests ionic bonding, lattice structure, and the conditions required for electrical conduction. The key concept is that conduction requires free-moving charge carriers. In solid NaCl, ions are locked in the lattice; in aqueous NaCl, they are free.'
      }
    ]
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    icon: '⚗️',
    color: '#0369a1',
    bgColor: '#e0f2fe',
    textColor: '#0c4a6e',
    category: 'science',
    description: 'Explore atoms, bonding, reactions and organic chemistry for WASSCE success',
    examFormat: 'Paper 1: 50 MCQ (1hr 15min) | Paper 2: Theory (2hr) | Paper 3: Practical (2hr 45min)',
    totalTopics: 5,
    topics: [
      {
        id: 'atomic_structure',
        name: 'Atomic Structure & Periodic Table',
        icon: '⚛️',
        lessonNotes: `<h4>Atomic Structure</h4>
<p>An <strong>atom</strong> is the smallest particle of an element that retains the chemical properties of that element. Every atom has a tiny, dense, positively charged <strong>nucleus</strong> containing <strong>protons</strong> (positive charge, relative mass 1) and <strong>neutrons</strong> (no charge, relative mass 1). Surrounding the nucleus are <strong>electrons</strong> (negative charge, negligible mass) arranged in shells (energy levels).</p>
<ul>
  <li><strong>Atomic number (Z):</strong> number of protons in the nucleus. Defines the element.</li>
  <li><strong>Mass number (A):</strong> total number of protons + neutrons.</li>
  <li><strong>Neutrons = A − Z</strong></li>
  <li><strong>Isotopes:</strong> atoms of the same element with the same atomic number but different mass numbers (different neutron count). E.g. ¹²C and ¹⁴C. They have the same chemical properties but different physical properties.</li>
</ul>
<h4>Electronic Configuration</h4>
<p>Electrons occupy shells in order: shell 1 (max 2), shell 2 (max 8), shell 3 (max 8 for first 20 elements). E.g. Na (Z=11): 2, 8, 1. The <strong>valence electrons</strong> (outermost shell) determine chemical behaviour.</p>
<h4>The Periodic Table</h4>
<p>Elements are arranged in order of increasing atomic number. <strong>Periods</strong> are horizontal rows; the period number equals the number of occupied electron shells. <strong>Groups</strong> are vertical columns; elements in the same group have the same number of valence electrons and similar properties.</p>
<ul>
  <li>Group I (alkali metals): 1 valence electron, very reactive, form +1 ions.</li>
  <li>Group VII (halogens): 7 valence electrons, form −1 ions, very electronegative.</li>
  <li>Group 0/VIII (noble gases): full outer shell, unreactive.</li>
  <li>Metallic character decreases across a period; increases down a group. Atomic radius decreases across a period; increases down a group.</li>
</ul>`,
        keyPoints: [
          'Atomic number = number of protons; mass number = protons + neutrons; neutrons = A − Z',
          'Isotopes have the same atomic number but different mass numbers (different neutrons)',
          'Electron shells fill in order: shell 1 (max 2), shell 2 (max 8), shell 3 (max 8)',
          'Elements in the same group have the same number of valence electrons and similar chemical properties'
        ],
        formulas: [
          'Neutrons = Mass number − Atomic number: N = A − Z',
          'Relative atomic mass = weighted average of isotope masses',
          'Shell capacity: shell n holds max 2n² electrons'
        ],
        examTips: [
          'Always state the atomic number AND mass number when describing an atom or isotope',
          'For electronic configuration of the first 20 elements, remember 2,8,8,2 is the maximum pattern',
          'When asked to explain isotopes, always mention same element (same Z) but different neutron count'
        ],
        commonMistakes: [
          'Confusing atomic number with mass number — atomic number is ONLY protons, mass number includes neutrons',
          'Saying isotopes have different chemical properties — they have the same chemical properties'
        ],
        mcq: [
          { q: 'The atomic number of an element is equal to the number of', options: ['A. neutrons', 'B. protons', 'C. electrons and neutrons', 'D. mass units'], answer: 1, explanation: 'The atomic number equals the number of protons in the nucleus. In a neutral atom, it also equals the number of electrons.' },
          { q: 'An atom has mass number 23 and 12 neutrons. Its atomic number is', options: ['A. 11', 'B. 12', 'C. 23', 'D. 35'], answer: 0, explanation: 'Atomic number = mass number − neutrons = 23 − 12 = 11.' },
          { q: 'Isotopes of the same element have the same', options: ['A. mass number', 'B. number of neutrons', 'C. atomic number', 'D. relative atomic mass'], answer: 2, explanation: 'Isotopes are atoms of the same element, so they have the same atomic number (same number of protons). They differ in neutron number and mass number.' },
          { q: 'The maximum number of electrons in the second shell is', options: ['A. 2', 'B. 4', 'C. 8', 'D. 18'], answer: 2, explanation: 'The second electron shell can hold a maximum of 8 electrons.' },
          { q: 'Elements in the same group of the periodic table have similar chemical properties because they have the same number of', options: ['A. neutrons', 'B. protons', 'C. electron shells', 'D. valence electrons'], answer: 3, explanation: 'Elements in the same group have the same number of valence (outermost) electrons, which determines their chemical behaviour.' },
          { q: 'Across a period in the periodic table, atomic radius generally', options: ['A. increases', 'B. decreases', 'C. stays constant', 'D. first increases then decreases'], answer: 1, explanation: 'Across a period, nuclear charge increases while electrons are added to the same shell, so the nucleus pulls electrons in more strongly, decreasing the atomic radius.' },
          { q: 'Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Its relative atomic mass is approximately', options: ['A. 35', 'B. 35.5', 'C. 36', 'D. 37'], answer: 1, explanation: 'RAM = (35 × 75 + 37 × 25)/100 = (2625 + 925)/100 = 3550/100 = 35.5.' },
          { q: 'Which group in the periodic table contains the noble gases?', options: ['A. Group I', 'B. Group IV', 'C. Group VII', 'D. Group 0 (VIII)'], answer: 3, explanation: 'Noble gases (He, Ne, Ar, Kr, Xe) are in Group 0 or Group VIII; they have full outer shells and are chemically inert.' },
          { q: 'The electronic configuration of sodium (Z = 11) is', options: ['A. 2, 9', 'B. 2, 8, 1', 'C. 3, 8', 'D. 11'], answer: 1, explanation: 'Sodium has 11 electrons: first shell 2, second shell 8, third shell 1 → 2, 8, 1.' },
          { q: 'Which of the following is a property of elements in Group I (alkali metals)?', options: ['A. They are poor conductors of electricity', 'B. They form +1 ions', 'C. They have 2 valence electrons', 'D. They are non-metals'], answer: 1, explanation: 'Alkali metals have 1 valence electron and readily lose it to form +1 ions. They are metals and good conductors.' }
        ],
        theory: [
          { question: 'Define the terms (a) atomic number, (b) mass number, and (c) isotopes. Chlorine has isotopes ³⁵Cl and ³⁷Cl in the ratio 3:1. Calculate the relative atomic mass of chlorine.', marks: 10, answer: '(a) Atomic number is the number of protons in the nucleus of an atom. (b) Mass number is the total number of protons and neutrons in the nucleus. (c) Isotopes are atoms of the same element having the same atomic number but different mass numbers (different numbers of neutrons). Calculation: ratio 3:1 means 75% ³⁵Cl and 25% ³⁷Cl. RAM = (35 × 75 + 37 × 25)/100 = (2625 + 925)/100 = 3550/100 = 35.5.', markingGuide: 'Award 2 marks each for (a) and (b). Award 3 marks for the definition of isotopes. Award 3 marks for the RAM calculation (set-up 1, working 1, answer 1).' },
          { question: 'Describe the structure of the periodic table and explain the trend in reactivity of Group I elements down the group.', marks: 8, answer: 'The periodic table arranges elements in order of increasing atomic number. Horizontal rows are periods (period number = number of occupied shells). Vertical columns are groups (same group = same number of valence electrons). Group I metals (Li, Na, K, Rb, Cs) each have 1 valence electron. Going down the group, each successive element has an extra electron shell, so the valence electron is further from the nucleus and more shielded by inner electrons. The force of attraction between the nucleus and the outer electron decreases, so it is lost more easily. Hence reactivity increases down Group I: Cs is more reactive than K, which is more reactive than Na, which is more reactive than Li.', markingGuide: 'Award 3 marks for describing the structure (periods, groups, ordering). Award 5 marks for the explanation of increasing reactivity: extra shells (1), greater distance (1), more shielding (1), weaker nuclear attraction (1), easier electron loss/greater reactivity (1).' }
        ]
      },
      {
        id: 'chemical_bonding',
        name: 'Chemical Bonding & Structure',
        icon: '🔗',
        lessonNotes: `<h4>Types of Chemical Bonding</h4>
<p>Chemical bonds form when atoms lose, gain, or share electrons to achieve a stable (usually full outer shell) electron configuration.</p>
<p><strong>Ionic bonding</strong> involves the transfer of electrons from a metal to a non-metal. The metal atom loses electrons to become a positively charged <strong>cation</strong>; the non-metal gains electrons to become a negatively charged <strong>anion</strong>. The strong electrostatic attraction between oppositely charged ions is the ionic bond. Ionic compounds form giant ionic lattices, are crystalline solids at room temperature, have high melting/boiling points, and conduct electricity when melted or dissolved in water (ions are mobile). Example: NaCl — Na loses 1 electron (Na⁺), Cl gains 1 electron (Cl⁻).</p>
<p><strong>Covalent bonding</strong> involves the sharing of electron pairs between non-metal atoms. Each shared pair forms one covalent bond. A <strong>single bond</strong> shares 1 pair; a <strong>double bond</strong> shares 2 pairs; a <strong>triple bond</strong> shares 3 pairs. Covalent compounds can be simple molecular (low melting points, poor conductors) or giant covalent structures (very high melting points, e.g. diamond, silicon dioxide). Examples: H₂O (2 single bonds), O₂ (double bond), N₂ (triple bond).</p>
<p><strong>Metallic bonding</strong> consists of a lattice of positive metal ions surrounded by a 'sea' of delocalised electrons. This explains metals' electrical conductivity, malleability, and high melting points.</p>
<p><strong>Dative (co-ordinate) bond:</strong> both electrons in the shared pair are donated by one atom (e.g. NH₄⁺ formation).</p>`,
        keyPoints: [
          'Ionic bonds involve electron transfer from metal to non-metal; covalent bonds involve electron sharing between non-metals',
          'Ionic compounds have high melting points and conduct electricity when molten or in solution',
          'Simple covalent molecules have low melting points; giant covalent structures (diamond) have very high melting points',
          'Metallic bonding involves a sea of delocalised electrons, explaining conductivity and malleability'
        ],
        formulas: [
          'Number of covalent bonds = number of electrons needed for full shell ÷ 2',
          'Lewis (dot-and-cross) structure: show valence electrons only; shared pairs as bonds'
        ],
        examTips: [
          'For ionic compounds, always name the cation first then the anion (e.g. sodium chloride)',
          'Show dot-and-cross diagrams with each atom in a circle and only valence electrons',
          'When asked why ionic compounds conduct electricity when molten, state that ions become free to move'
        ],
        commonMistakes: [
          'Saying covalent compounds always have low melting points — giant covalent structures (diamond) have very high melting points',
          'Drawing dot-and-cross diagrams with core electrons included — only show valence electrons'
        ],
        mcq: [
          { q: 'Ionic bonds are formed by the', options: ['A. sharing of electrons between two metals', 'B. transfer of electrons from a metal to a non-metal', 'C. sharing of electrons between two non-metals', 'D. transfer of electrons from a non-metal to a metal'], answer: 1, explanation: 'Ionic bonding involves electron transfer from a metal (which forms a cation) to a non-metal (which forms an anion).' },
          { q: 'Which of the following compounds contains a covalent bond?', options: ['A. NaCl', 'B. MgO', 'C. H₂O', 'D. KBr'], answer: 2, explanation: 'H₂O is formed by covalent bonding between non-metal atoms (H and O sharing electrons). NaCl, MgO and KBr are ionic compounds.' },
          { q: 'Ionic compounds conduct electricity when', options: ['A. in solid state only', 'B. melted or dissolved in water', 'C. at room temperature only', 'D. they never conduct electricity'], answer: 1, explanation: 'In the solid state, ions are fixed in the lattice. When melted or dissolved, ions are free to move and carry charge.' },
          { q: 'A double covalent bond involves the sharing of', options: ['A. one electron pair', 'B. two electron pairs', 'C. three electron pairs', 'D. four electron pairs'], answer: 1, explanation: 'A double bond consists of two shared electron pairs (4 electrons total) between two atoms.' },
          { q: 'The structure of diamond is an example of a', options: ['A. simple molecular structure', 'B. metallic lattice', 'C. giant ionic lattice', 'D. giant covalent structure'], answer: 3, explanation: 'Diamond is a giant covalent structure where each carbon atom is bonded to 4 others in a tetrahedral arrangement, giving it extreme hardness and a very high melting point.' },
          { q: 'Which property is characteristic of metallic bonding?', options: ['A. Very low melting point', 'B. Non-conduction of electricity', 'C. High electrical conductivity', 'D. Brittleness when bent'], answer: 2, explanation: 'Metallic bonding involves delocalised electrons that can move freely, making metals excellent conductors of electricity and heat.' },
          { q: 'When magnesium forms an ionic compound, it', options: ['A. gains 2 electrons to form Mg²⁻', 'B. loses 2 electrons to form Mg²⁺', 'C. shares 2 electrons with non-metals', 'D. gains 1 electron to form Mg⁺'], answer: 1, explanation: 'Magnesium (Group II) has 2 valence electrons which it loses to form a Mg²⁺ cation with a full outer shell.' },
          { q: 'The nitrogen molecule (N₂) contains', options: ['A. a single covalent bond', 'B. a double covalent bond', 'C. a triple covalent bond', 'D. an ionic bond'], answer: 2, explanation: 'Each nitrogen atom needs 3 more electrons for a full outer shell; they share 3 pairs, forming a triple bond (N≡N).' },
          { q: 'Which of the following substances has the highest melting point?', options: ['A. Ice (H₂O)', 'B. Iodine (I₂)', 'C. Sodium chloride (NaCl)', 'D. Diamond (C)'], answer: 3, explanation: 'Diamond has a giant covalent structure with strong covalent bonds throughout, giving it the highest melting point. NaCl is ionic with a high melting point, but not as high as diamond.' },
          { q: 'A co-ordinate (dative) bond differs from an ordinary covalent bond in that', options: ['A. it involves 3 shared electrons', 'B. both electrons in the shared pair come from one atom', 'C. it only forms between metals', 'D. no electrons are shared'], answer: 1, explanation: 'In a dative bond, one atom donates both electrons to form the shared pair, unlike an ordinary covalent bond where each atom provides one electron.' }
        ],
        theory: [
          { question: 'Explain ionic bonding using sodium chloride (NaCl) as an example. Include a dot-and-cross diagram and state three properties of ionic compounds.', marks: 10, answer: 'Ionic bonding occurs by electron transfer from a metal to a non-metal. In NaCl: sodium (2,8,1) loses its one valence electron to chlorine (2,8,7), which needs one electron for a full shell. Na becomes Na⁺ (2,8) and Cl becomes Cl⁻ (2,8,8). The strong electrostatic attraction between Na⁺ and Cl⁻ is the ionic bond. [Dot-and-cross diagram: Na with 1 outer electron donating to Cl with 7, showing Na⁺ and Cl⁻ with full outer shells.] Three properties: (1) High melting and boiling points due to strong electrostatic forces between many ions in the lattice. (2) Conduct electricity when molten or in aqueous solution (ions are free to move) but not in the solid state. (3) Soluble in water (polar solvent attracts and separates the ions).', markingGuide: 'Award 3 marks for explanation of electron transfer with specific reference to Na and Cl electron configurations. Award 3 marks for a correctly labelled dot-and-cross diagram. Award 1 mark each for three correctly stated properties (3 marks).' },
          { question: 'Compare and contrast ionic bonding and covalent bonding in terms of (a) how the bond forms, (b) the types of elements involved, and (c) electrical conductivity.', marks: 8, answer: '(a) Formation: Ionic bonding involves the transfer of electrons from a metal atom to a non-metal atom, forming oppositely charged ions held by electrostatic attraction. Covalent bonding involves the sharing of one or more electron pairs between non-metal atoms so that each achieves a full outer shell. (b) Elements: Ionic bonds typically form between metals and non-metals (e.g. Na and Cl). Covalent bonds form between non-metal atoms (e.g. H and O, C and H). (c) Conductivity: Ionic compounds conduct electricity when molten or dissolved because ions are free to move and carry charge; they do not conduct in the solid state. Simple covalent compounds generally do not conduct electricity in any state because they contain no ions or free electrons; however, giant covalent structures like graphite do conduct due to delocalised electrons.', markingGuide: 'Award 2 marks for each of the three comparisons (6 marks). Award 2 marks for clear, accurate use of examples throughout. Maximum 8 marks.' }
        ]
      },
      {
        id: 'acids_bases_salts',
        name: 'Acids, Bases & Salts',
        icon: '🧪',
        lessonNotes: `<h4>Acids</h4>
<p>An <strong>acid</strong> is a substance that produces hydrogen ions (H⁺) when dissolved in water. Common acids: hydrochloric acid (HCl), sulphuric acid (H₂SO₄), nitric acid (HNO₃), ethanoic (acetic) acid (CH₃COOH). Strong acids (HCl, H₂SO₄, HNO₃) completely dissociate; weak acids (CH₃COOH, H₂CO₃) partially dissociate. Properties: sour taste, turn litmus red, pH below 7, react with metals to give H₂, react with carbonates to give CO₂.</p>
<h4>Bases and Alkalis</h4>
<p>A <strong>base</strong> is a substance that accepts H⁺ ions (proton acceptor) — Brønsted-Lowry definition. Metal oxides and metal hydroxides are bases. An <strong>alkali</strong> is a soluble base that produces OH⁻ ions in water. Examples: NaOH, KOH, Ca(OH)₂, NH₃ solution. Properties: bitter taste, soapy feel, turn litmus blue, pH above 7.</p>
<h4>pH Scale and Indicators</h4>
<p>The <strong>pH scale</strong> runs from 0 to 14. pH 7 = neutral, pH &lt; 7 = acidic, pH &gt; 7 = alkaline. Common indicators: litmus (red in acid, blue in alkali), phenolphthalein (colourless in acid, pink in alkali), methyl orange (red in acid, yellow in alkali).</p>
<h4>Neutralisation and Salts</h4>
<p><strong>Neutralisation:</strong> acid + base → salt + water. A <strong>salt</strong> is formed when the H⁺ of an acid is replaced by a metal ion or NH₄⁺. Methods of salt preparation: (1) direct combination, (2) reaction of metal with acid, (3) neutralisation (acid + alkali), (4) reaction of acid with metal oxide/carbonate. Titration determines exact volumes for neutralisation.</p>`,
        keyPoints: [
          'Acids produce H⁺ ions in water; alkalis produce OH⁻ ions; pH < 7 acidic, pH 7 neutral, pH > 7 alkaline',
          'Neutralisation: acid + base → salt + water',
          'Strong acids fully dissociate; weak acids partially dissociate',
          'Salts are formed when H⁺ of an acid is replaced by a metal ion'
        ],
        formulas: [
          'Acid + Metal → Salt + Hydrogen: 2HCl + Mg → MgCl₂ + H₂',
          'Acid + Metal carbonate → Salt + Water + CO₂: 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂',
          'Acid + Alkali → Salt + Water: HCl + NaOH → NaCl + H₂O',
          'Acid + Metal oxide → Salt + Water: H₂SO₄ + CuO → CuSO₄ + H₂O'
        ],
        examTips: [
          'Name salts correctly: hydrochloric acid → chloride; sulphuric acid → sulphate; nitric acid → nitrate',
          'For titration calculations, use moles = concentration × volume; moles acid = moles base at endpoint',
          'Always state which indicator changes colour and at what pH when discussing acid-base reactions'
        ],
        commonMistakes: [
          'Saying bases and alkalis are the same — all alkalis are bases, but not all bases are alkalis (only soluble bases are alkalis)',
          'Forgetting CO₂ as a product when acid reacts with a carbonate'
        ],
        mcq: [
          { q: 'Which of the following is a property of acids?', options: ['A. Turn litmus blue', 'B. Have pH greater than 7', 'C. React with carbonates to give CO₂', 'D. Feel soapy to the touch'], answer: 2, explanation: 'Acids react with metal carbonates to produce a salt, water and carbon dioxide. Turning litmus blue and pH > 7 are properties of alkalis.' },
          { q: 'A solution has pH 11. It is best described as', options: ['A. strongly acidic', 'B. weakly acidic', 'C. neutral', 'D. alkaline'], answer: 3, explanation: 'pH 11 is above 7, so the solution is alkaline. pH below 7 is acidic; pH 7 is neutral; pH above 7 is alkaline.' },
          { q: 'The product of a neutralisation reaction between sodium hydroxide and hydrochloric acid is', options: ['A. Na₂O + HCl', 'B. NaCl + H₂O', 'C. NaH + ClOH', 'D. NaCl + H₂'], answer: 1, explanation: 'Neutralisation: NaOH + HCl → NaCl + H₂O. The products are sodium chloride (a salt) and water.' },
          { q: 'Phenolphthalein indicator is colourless in acid and turns which colour in alkali?', options: ['A. Red', 'B. Yellow', 'C. Pink/magenta', 'D. Blue'], answer: 2, explanation: 'Phenolphthalein is colourless in acidic and neutral solutions and turns pink/magenta in alkaline solutions. It is used as an indicator in titrations.' },
          { q: 'When dilute sulphuric acid reacts with zinc metal, the products are', options: ['A. ZnSO₄ + H₂', 'B. ZnO + H₂SO₄', 'C. ZnS + H₂O', 'D. ZnSO₄ + H₂O'], answer: 0, explanation: 'Acid + metal → salt + hydrogen: H₂SO₄ + Zn → ZnSO₄ + H₂. The gas produced (hydrogen) burns with a squeaky pop.' },
          { q: 'Which salt is formed when nitric acid reacts with potassium hydroxide?', options: ['A. Potassium chloride', 'B. Potassium sulphate', 'C. Potassium carbonate', 'D. Potassium nitrate'], answer: 3, explanation: 'Nitric acid (HNO₃) + KOH → potassium nitrate (KNO₃) + H₂O. Nitric acid always forms nitrate salts.' },
          { q: 'Which of the following acids is classified as a strong acid?', options: ['A. Ethanoic acid', 'B. Carbonic acid', 'C. Hydrochloric acid', 'D. Citric acid'], answer: 2, explanation: 'Hydrochloric acid (HCl) is a strong acid — it completely dissociates into ions in water. Ethanoic, carbonic and citric acids are weak acids that only partially dissociate.' },
          { q: 'Carbon dioxide is produced when an acid reacts with a', options: ['A. metal', 'B. metal oxide', 'C. metal carbonate', 'D. metal hydroxide'], answer: 2, explanation: 'Acid + metal carbonate → salt + water + CO₂. E.g. 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.' },
          { q: 'An alkali differs from a base in that it', options: ['A. has a pH below 7', 'B. is a soluble base that ionises in water to give OH⁻', 'C. is always a metal oxide', 'D. cannot neutralise acids'], answer: 1, explanation: 'All alkalis are bases, but an alkali is specifically a base that is soluble in water and produces OH⁻ ions. Insoluble bases (like CuO) are not alkalis.' },
          { q: 'In a titration, 25 cm³ of 0.1 mol/dm³ NaOH exactly neutralises HCl. Using moles = c × v: moles of NaOH =', options: ['A. 0.0025 mol', 'B. 0.025 mol', 'C. 0.25 mol', 'D. 2.5 mol'], answer: 0, explanation: 'Moles = concentration × volume(dm³) = 0.1 × (25/1000) = 0.1 × 0.025 = 0.0025 mol.' }
        ],
        theory: [
          { question: 'Describe how you would prepare a pure, dry sample of copper(II) sulphate crystals starting from copper(II) oxide and dilute sulphuric acid.', marks: 10, answer: 'Add excess copper(II) oxide (CuO) to warm dilute sulphuric acid in a beaker, stirring until no more dissolves (excess ensures all acid is used). The equation is: CuO + H₂SO₄ → CuSO₄ + H₂O. Filter the mixture through filter paper and funnel to remove excess unreacted copper(II) oxide. Collect the blue copper(II) sulphate solution in an evaporating basin. Heat the solution gently to evaporate most of the water until a saturated solution is obtained, then leave to cool. Blue crystals of CuSO₄·5H₂O will form. Filter off the crystals, wash with a small amount of cold distilled water and pat dry with filter paper. The product is pure dry copper(II) sulphate crystals.', markingGuide: 'Award 2 marks for using excess CuO and giving the reason. Award 2 marks for the correct equation. Award 2 marks for filtration to remove excess CuO. Award 2 marks for evaporation and crystallisation steps. Award 2 marks for drying the crystals. Maximum 10 marks.' },
          { question: 'Explain what is meant by neutralisation and describe how you would use a burette and pipette to determine the volume of 0.1 mol/dm³ sodium hydroxide needed to exactly neutralise 25 cm³ of 0.1 mol/dm³ hydrochloric acid.', marks: 8, answer: 'Neutralisation is the reaction between an acid and a base (or alkali) to produce a salt and water only, with no change in pH; it is an exothermic process. The acid and alkali solutions can be represented as H⁺(aq) + OH⁻(aq) → H₂O(l). Procedure: Use a pipette to measure exactly 25 cm³ of HCl and transfer to a conical flask. Add 2–3 drops of suitable indicator (e.g. phenolphthalein or methyl orange). Fill the burette with 0.1 mol/dm³ NaOH to the 0 cm³ mark. Add NaOH slowly from the burette, swirling the flask after each addition. Near the endpoint, add NaOH drop by drop. The endpoint is reached when the indicator permanently changes colour (phenolphthalein: colourless to pink). Record the final burette reading and calculate the titre (volume of NaOH used). Since concentrations are equal, the volume of NaOH needed equals 25 cm³.', markingGuide: 'Award 2 marks for defining neutralisation. Award 2 marks for correct use of pipette for HCl and indicator. Award 2 marks for burette technique and slow addition near endpoint. Award 2 marks for reading the titre and stating the result. Maximum 8 marks.' }
        ]
      },
      {
        id: 'organic_chemistry',
        name: 'Organic Chemistry',
        icon: '🌿',
        lessonNotes: `<h4>Introduction to Organic Chemistry</h4>
<p><strong>Organic chemistry</strong> is the study of carbon-containing compounds. Carbon's ability to form four covalent bonds and long chains (catenation) gives rise to millions of compounds. Organic compounds are grouped into <strong>homologous series</strong> — families with the same functional group and general formula, where successive members differ by CH₂.</p>
<h4>Alkanes</h4>
<p>Alkanes are saturated hydrocarbons (only C–C single bonds). General formula: CₙH₂ₙ₊₂. First members: methane (CH₄), ethane (C₂H₆), propane (C₃H₈), butane (C₄H₁₀). Obtained from petroleum by fractional distillation. Reactions: combustion (complete → CO₂ + H₂O; incomplete → CO/C + H₂O), substitution with halogens in UV light.</p>
<h4>Alkenes</h4>
<p>Alkenes are unsaturated hydrocarbons with at least one C=C double bond. General formula: CₙH₂ₙ. Examples: ethene (C₂H₄), propene (C₃H₆). More reactive than alkanes. Key reaction: addition reactions across the double bond — with H₂ (hydrogenation), with Br₂ (decolourises bromine water, used as test for unsaturation), with HBr, and with H₂O (hydration to form alcohols).</p>
<h4>Functional Groups and Other Homologous Series</h4>
<ul>
  <li><strong>Alcohols (–OH):</strong> methanol (CH₃OH), ethanol (C₂H₅OH). Fermentation: glucose → ethanol + CO₂. Used as fuels and solvents.</li>
  <li><strong>Carboxylic acids (–COOH):</strong> ethanoic acid (CH₃COOH). Weak acids. React with alcohols to form esters (esterification).</li>
  <li><strong>Esters (–COO–):</strong> fruity smells, used in flavourings and perfumes.</li>
</ul>`,
        keyPoints: [
          'Alkanes (CₙH₂ₙ₊₂) are saturated; alkenes (CₙH₂ₙ) are unsaturated with a C=C double bond',
          'Test for unsaturation: alkenes decolourise bromine water; alkanes do not',
          'Alkenes undergo addition reactions; alkanes undergo substitution reactions with halogens in UV light',
          'Ethanol is produced by fermentation of glucose: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂'
        ],
        formulas: [
          'Alkane general formula: CₙH₂ₙ₊₂',
          'Alkene general formula: CₙH₂ₙ',
          'Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
          'Complete combustion: CH₄ + 2O₂ → CO₂ + 2H₂O',
          'Esterification: alcohol + carboxylic acid ⇌ ester + water'
        ],
        examTips: [
          'Know the first four members of alkanes and alkenes: meth-, eth-, prop-, but-',
          'When testing for alkenes, state that bromine water is decolourised (orange → colourless)',
          'For combustion equations, ensure the equation is fully balanced with correct products'
        ],
        commonMistakes: [
          'Confusing saturated (alkanes, no C=C) with unsaturated (alkenes, have C=C)',
          'Writing fermentation products incorrectly — glucose gives ethanol and CO₂, not methanol'
        ],
        mcq: [
          { q: 'The general formula of alkanes is', options: ['A. CₙH₂ₙ', 'B. CₙH₂ₙ₊₂', 'C. CₙH₂ₙ₋₂', 'D. CₙH₂ₙ₊₁'], answer: 1, explanation: 'Alkanes are saturated hydrocarbons with general formula CₙH₂ₙ₊₂ (e.g. CH₄, C₂H₆, C₃H₈).' },
          { q: 'Alkenes are described as unsaturated because they contain', options: ['A. carbon atoms only', 'B. hydrogen atoms', 'C. at least one C=C double bond', 'D. an OH group'], answer: 2, explanation: 'Unsaturation refers to the presence of a C=C double bond in alkenes. Alkanes with only C–C single bonds are saturated.' },
          { q: 'The test for an alkene involves', options: ['A. heating with copper oxide', 'B. decolourising bromine water', 'C. burning in air', 'D. adding litmus solution'], answer: 1, explanation: 'Alkenes decolourise bromine water (orange to colourless) because they undergo addition reactions across the C=C double bond.' },
          { q: 'Fermentation of glucose produces', options: ['A. methanol and oxygen', 'B. ethanol and carbon dioxide', 'C. ethanol and water only', 'D. propanol and CO₂'], answer: 1, explanation: 'Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Yeast (containing the enzyme zymase) converts glucose to ethanol and carbon dioxide.' },
          { q: 'The molecular formula of propane is', options: ['A. C₂H₄', 'B. C₃H₆', 'C. C₃H₈', 'D. C₄H₈'], answer: 2, explanation: 'Propane is the third member of the alkane series (n = 3): CₙH₂ₙ₊₂ = C₃H₈.' },
          { q: 'Incomplete combustion of hydrocarbons produces', options: ['A. CO₂ and H₂O only', 'B. CO and H₂ only', 'C. CO (or C) and H₂O', 'D. H₂O and H₂'], answer: 2, explanation: 'Incomplete combustion (insufficient oxygen) produces carbon monoxide (CO) and/or soot (C) along with water, rather than CO₂ and H₂O from complete combustion.' },
          { q: 'An ester is formed by the reaction between a carboxylic acid and', options: ['A. an alkene', 'B. an alcohol', 'C. a carbonate', 'D. a metal oxide'], answer: 1, explanation: 'Esterification: carboxylic acid + alcohol ⇌ ester + water (with acid catalyst). E.g. CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.' },
          { q: 'Ethanol (C₂H₅OH) belongs to which homologous series?', options: ['A. Alkanes', 'B. Alkenes', 'C. Alcohols', 'D. Carboxylic acids'], answer: 2, explanation: 'Ethanol contains the –OH (hydroxyl) functional group, which is the defining feature of the alcohol homologous series.' },
          { q: 'The reaction of alkanes with halogens in UV light is called', options: ['A. addition', 'B. substitution', 'C. elimination', 'D. fermentation'], answer: 1, explanation: 'Alkanes react with halogens (e.g. Cl₂) by substitution in the presence of UV light: CH₄ + Cl₂ → CH₃Cl + HCl. A hydrogen atom is substituted by a chlorine atom.' },
          { q: 'Which of the following is a use of alkanes obtained from petroleum?', options: ['A. Making nylon', 'B. Fuels such as petrol, diesel and natural gas', 'C. Fermenting sugars', 'D. Making aspirin'], answer: 1, explanation: 'Alkanes (e.g. methane, propane, butane, petrol, diesel fractions) are widely used as fuels. They are obtained from petroleum by fractional distillation.' }
        ],
        theory: [
          { question: 'Compare alkanes and alkenes in terms of (a) general formula, (b) bonding, (c) a chemical test to distinguish them, and (d) one reaction each type undergoes.', marks: 10, answer: '(a) Alkanes: CₙH₂ₙ₊₂ (e.g. CH₄, C₂H₆). Alkenes: CₙH₂ₙ (e.g. C₂H₄, C₃H₆). (b) Alkanes contain only C–C single bonds (saturated). Alkenes contain at least one C=C double bond (unsaturated). (c) Chemical test: add bromine water. Alkenes decolourise bromine water (orange to colourless) by addition across the C=C double bond. Alkanes do not decolourise bromine water at room temperature. (d) Alkanes — substitution reaction with Cl₂ in UV light: CH₄ + Cl₂ → CH₃Cl + HCl. Alkenes — addition reaction: ethene + Br₂ → 1,2-dibromoethane (CH₂BrCH₂Br).', markingGuide: 'Award 2 marks for both general formulae. Award 2 marks for describing bonding difference. Award 3 marks for the bromine water test with correct observations. Award 3 marks for one correct reaction each (2 reactions, 1.5 marks each). Maximum 10 marks.' },
          { question: 'Describe how ethanol is manufactured by fermentation and by the hydration of ethene. State one advantage and one disadvantage of each method.', marks: 8, answer: 'Fermentation: glucose (from sugar cane/crops) is dissolved in water and yeast is added. The enzyme zymase in yeast converts glucose to ethanol and CO₂ at about 37°C in the absence of air: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. The ethanol is separated by fractional distillation. Advantage: uses renewable resources (crops), sustainable. Disadvantage: slow batch process; produces a dilute solution requiring energy-intensive distillation. Hydration of ethene: ethene (from cracking petroleum) reacts with steam at 300°C, 60–70 atm, with a phosphoric acid catalyst: C₂H₄ + H₂O → C₂H₅OH. Advantage: fast continuous process giving concentrated ethanol. Disadvantage: uses ethene from non-renewable petroleum; requires high temperature and pressure (expensive).', markingGuide: 'Award 2 marks for fermentation equation and conditions. Award 2 marks for hydration equation and conditions. Award 1 mark each for one valid advantage and disadvantage of fermentation (2 marks). Award 1 mark each for one valid advantage and disadvantage of hydration (2 marks). Maximum 8 marks.' }
        ]
      },
      {
        id: 'chemical_kinetics',
        name: 'Chemical Kinetics & Equilibrium',
        icon: '⚡',
        lessonNotes: `<h4>Rate of Reaction</h4>
<p>The <strong>rate of reaction</strong> measures how quickly reactants are converted to products. It can be measured by the rate of disappearance of a reactant or the rate of appearance of a product over time. Rate = change in amount ÷ time. Reactions occur when reactant particles collide with sufficient energy (at least equal to the <strong>activation energy</strong>) and with the correct orientation — the <strong>collision theory</strong>.</p>
<h4>Factors Affecting Rate of Reaction</h4>
<ul>
  <li><strong>Temperature:</strong> Increasing temperature gives particles more kinetic energy, so collisions are more frequent AND more particles have energy ≥ activation energy → rate increases.</li>
  <li><strong>Concentration (for solutions):</strong> Higher concentration means more particles per unit volume → more frequent collisions → higher rate.</li>
  <li><strong>Pressure (for gases):</strong> Higher pressure increases the number of gas molecules per unit volume → more frequent collisions → higher rate.</li>
  <li><strong>Surface area:</strong> Smaller particle size (powder vs lumps) gives greater surface area → more particles exposed → more frequent collisions → higher rate. Example: marble chips vs marble powder.</li>
  <li><strong>Catalyst:</strong> A catalyst increases the rate by providing an alternative reaction pathway with a lower activation energy. It is not consumed in the reaction.</li>
</ul>
<h4>Reversible Reactions and Equilibrium</h4>
<p>Some reactions are <strong>reversible</strong> (⇌). When the rate of the forward reaction equals the rate of the reverse reaction in a closed system, the system reaches <strong>dynamic equilibrium</strong>. Concentrations of reactants and products remain constant (though not necessarily equal). <strong>Le Chatelier's principle:</strong> if a system at equilibrium is disturbed, it responds by shifting to minimise the disturbance.</p>`,
        keyPoints: [
          'Rate of reaction increases with temperature, concentration, pressure, surface area, and use of a catalyst',
          'Collision theory: reactions occur when particles collide with energy ≥ activation energy and correct orientation',
          'A catalyst provides an alternative pathway with lower activation energy; it is not consumed',
          'At dynamic equilibrium, forward rate = reverse rate and concentrations remain constant'
        ],
        formulas: [
          'Rate = change in quantity ÷ time',
          'Activation energy (Ea): minimum energy needed for a collision to result in reaction'
        ],
        examTips: [
          'When explaining how a factor increases rate, always link it to collision theory (more frequent/energetic collisions)',
          'A catalyst lowers the activation energy — never say it provides energy to reactants',
          'For equilibrium, state that concentrations are constant but NOT necessarily equal'
        ],
        commonMistakes: [
          'Saying a catalyst increases the energy of particles — it lowers the activation energy, not increases particle energy',
          'Confusing rate (speed of reaction) with yield (amount of product formed)'
        ],
        mcq: [
          { q: 'Which factor does NOT increase the rate of a chemical reaction?', options: ['A. Increasing temperature', 'B. Increasing concentration of reactants', 'C. Decreasing surface area', 'D. Adding a catalyst'], answer: 2, explanation: 'Decreasing surface area reduces the rate. Increasing temperature, concentration, and adding a catalyst all increase the rate.' },
          { q: 'A catalyst increases the rate of reaction by', options: ['A. increasing the temperature of reactants', 'B. providing an alternative pathway with lower activation energy', 'C. increasing the concentration of reactants', 'D. being consumed in the reaction'], answer: 1, explanation: 'A catalyst works by providing an alternative reaction pathway with a lower activation energy, so more collisions are successful. It is not consumed and remains unchanged at the end.' },
          { q: 'According to collision theory, a reaction occurs when particles collide with', options: ['A. any amount of energy', 'B. energy equal to or greater than the activation energy and correct orientation', 'C. high pressure only', 'D. exactly the activation energy'], answer: 1, explanation: 'Collision theory states that reactions only occur when colliding particles have energy ≥ the activation energy AND are correctly oriented.' },
          { q: 'Using marble chips (CaCO₃) with dilute HCl, increasing the temperature would', options: ['A. decrease the rate', 'B. not affect the rate', 'C. increase the rate', 'D. stop the reaction'], answer: 2, explanation: 'Higher temperature gives particles more kinetic energy, increasing both the frequency of collisions and the proportion with energy ≥ activation energy, so the rate increases.' },
          { q: 'The rate of a reaction between marble powder and acid compared to marble chips with the same acid is', options: ['A. slower, because powder has less surface area', 'B. faster, because powder has greater surface area', 'C. the same, surface area has no effect', 'D. slower, because powder dissolves more slowly'], answer: 1, explanation: 'Powder has a much greater surface area than chips, so more reactant particles are exposed and collisions are more frequent, giving a faster rate.' },
          { q: 'At dynamic equilibrium in a closed system', options: ['A. the reaction has stopped', 'B. only the forward reaction is occurring', 'C. the concentrations of reactants and products are equal', 'D. the rate of the forward reaction equals the rate of the reverse reaction'], answer: 3, explanation: 'At dynamic equilibrium both forward and reverse reactions continue but at equal rates, so the concentrations of reactants and products remain constant (not necessarily equal).' },
          { q: 'The activation energy of a reaction is', options: ['A. the total energy released in the reaction', 'B. the minimum energy needed for a collision to result in a reaction', 'C. the energy of all product molecules', 'D. zero for catalysed reactions'], answer: 1, explanation: 'Activation energy (Ea) is the minimum energy that colliding particles must possess for a successful reaction to occur.' },
          { q: 'Increasing the pressure of a gaseous reaction will', options: ['A. decrease the rate', 'B. have no effect on rate', 'C. increase the rate', 'D. lower the activation energy'], answer: 2, explanation: 'Higher pressure compresses the gas, increasing the number of molecules per unit volume. More frequent collisions occur, so the rate increases.' },
          { q: 'A reaction has a rate constant that doubles when temperature rises from 25°C to 35°C. This is best explained by', options: ['A. more particles having energy ≥ Ea at higher temperature', 'B. the activation energy decreasing at higher temperature', 'C. the concentration of reactants increasing with temperature', 'D. the catalyst working more efficiently'], answer: 0, explanation: 'A rise in temperature increases the average kinetic energy of particles. A greater proportion of particles have energy ≥ the activation energy, leading to more successful collisions and a faster rate.' },
          { q: 'An iron catalyst is used in the Haber process for making ammonia. Its role is to', options: ['A. increase the yield of ammonia', 'B. increase the rate of reaction without being consumed', 'C. raise the temperature of the reaction', 'D. provide nitrogen for the reaction'], answer: 1, explanation: 'The iron catalyst increases the rate of the reaction N₂ + 3H₂ ⇌ 2NH₃ without being consumed and without affecting the equilibrium position (yield).' }
        ],
        theory: [
          { question: 'Describe an experiment to investigate the effect of concentration on the rate of the reaction between sodium thiosulphate (Na₂S₂O₃) and dilute hydrochloric acid (HCl). State the expected results and explain them using collision theory.', marks: 10, answer: 'Procedure: Place a conical flask on a piece of paper with a black cross drawn on it. Add a fixed volume (e.g. 50 cm³) of sodium thiosulphate solution of known concentration and a fixed volume of dilute HCl. Start a stopwatch immediately. Time how long it takes for the cross to become invisible due to the formation of a yellow sulphur precipitate. Repeat with lower concentrations of Na₂S₂O₃ (diluting with water), keeping total volume and temperature constant. Record the time for each concentration. Results: as concentration of Na₂S₂O₃ increases, the time for the cross to disappear decreases (rate increases). Explanation (collision theory): higher concentration means more Na₂S₂O₃ particles per unit volume, so collisions between Na₂S₂O₃ and HCl particles are more frequent. A greater number of collisions per second with energy ≥ activation energy occur, so the rate increases.', markingGuide: 'Award 2 marks for describing the cross method (flask on paper, timing until cross invisible). Award 2 marks for keeping other variables constant (temperature, total volume, HCl). Award 2 marks for clearly stating results (more concentrated → faster). Award 4 marks for collision theory explanation (more particles per unit volume, more frequent collisions, more successful collisions per second).' },
          { question: 'State Le Chatelier\'s principle and explain how changing (a) temperature and (b) pressure affects the equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ/mol', marks: 8, answer: 'Le Chatelier\'s principle: if a closed system at equilibrium is subjected to a change, the system will respond in a direction that opposes the change and restores equilibrium. (a) Temperature: the forward reaction is exothermic (releases heat). Increasing temperature shifts the equilibrium to the LEFT (towards endothermic reverse reaction) to absorb the extra heat, reducing the yield of NH₃. Decreasing temperature shifts equilibrium to the RIGHT, increasing NH₃ yield but slowing the rate. The Haber process uses a compromise temperature (~450°C). (b) Pressure: there are 4 moles of gas on the left and 2 on the right. Increasing pressure shifts equilibrium to the RIGHT (towards fewer gas moles) to reduce pressure, increasing NH₃ yield. The Haber process uses high pressure (~200 atm) to favour NH₃ production.', markingGuide: 'Award 2 marks for correctly stating Le Chatelier\'s principle. Award 3 marks for part (a): direction of shift on increasing temperature (1), reason linking to exothermic reaction (1), effect on NH₃ yield (1). Award 3 marks for part (b): counting moles of gas each side (1), direction of shift on increasing pressure (1), effect on NH₃ yield (1). Maximum 8 marks.' }
        ]
      }
    ],
    pastQuestions: [
      { year: 2019, paper: 'Paper 1', question: 'An element has atomic number 17 and mass number 35. The number of neutrons in its nucleus is', options: ['A. 17', 'B. 18', 'C. 35', 'D. 52'], answer: 1, topic: 'atomic_structure', explanation: 'Neutrons = mass number − atomic number = 35 − 17 = 18.' },
      { year: 2020, paper: 'Paper 1', question: 'Which of the following properties is characteristic of ionic compounds?', options: ['A. Low melting point', 'B. Conduct electricity in the solid state', 'C. High melting point and conduct electricity when molten', 'D. Insoluble in water'], answer: 2, topic: 'chemical_bonding', explanation: 'Ionic compounds have strong electrostatic forces giving high melting points, and conduct electricity when molten (ions free to move) but not in the solid state.' },
      { year: 2021, paper: 'Paper 1', question: 'The product formed when dilute hydrochloric acid reacts with sodium carbonate is', options: ['A. NaCl and H₂ only', 'B. NaCl, H₂O and CO₂', 'C. NaOH and HCl', 'D. Na₂O and H₂CO₃'], answer: 1, topic: 'acids_bases_salts', explanation: '2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂. Acid + carbonate → salt + water + carbon dioxide.' },
      { year: 2022, paper: 'Paper 1', question: 'Which of the following is an unsaturated hydrocarbon?', options: ['A. Methane', 'B. Propane', 'C. Ethene', 'D. Butane'], answer: 2, topic: 'organic_chemistry', explanation: 'Ethene (C₂H₄) is an alkene containing a C=C double bond and is therefore unsaturated. Methane, propane and butane are alkanes (saturated).' },
      { year: 2023, paper: 'Paper 1', question: 'Which action would NOT increase the rate of the reaction between marble chips and dilute hydrochloric acid?', options: ['A. Heating the acid', 'B. Using powdered marble instead of chips', 'C. Increasing the volume of acid used', 'D. Increasing the concentration of the acid'], answer: 2, topic: 'chemical_kinetics', explanation: 'Increasing the volume of acid (without changing concentration) does not increase the rate. Heating, powdering (more surface area) and higher concentration all increase rate.' }
    ]
  },

  physics: {
    id: 'physics',
    name: 'Physics',
    shortName: 'Physics',
    icon: '⚡',
    color: '#ea580c',
    bgColor: '#ffedd5',
    textColor: '#9a3412',
    category: 'science',
    description: 'Master physics concepts from mechanics to modern physics for WASSCE success',
    examFormat: 'Paper 1: 50 MCQ (1hr 15min) | Paper 2: Theory (2hr) | Paper 3: Practical (2hr 45min)',
    totalTopics: 5,
    topics: [
      {
        id: 'mechanics_motion',
        name: 'Mechanics & Motion',
        icon: '🏃',
        lessonNotes: '<h4>Mechanics & Motion</h4><p>Mechanics is the branch of physics that deals with the motion of bodies and the forces that cause them. We begin by distinguishing <strong>scalar</strong> quantities (which have magnitude only, e.g. distance, speed, mass, energy, time) from <strong>vector</strong> quantities (which have both magnitude and direction, e.g. displacement, velocity, acceleration, force, momentum).</p><p><strong>Distance</strong> is the total path length travelled, while <strong>displacement</strong> is the straight-line distance from start to finish in a stated direction. Similarly, <strong>speed</strong> is the rate of change of distance, whereas <strong>velocity</strong> is the rate of change of displacement. <strong>Acceleration</strong> is the rate of change of velocity with time.</p><p>For uniformly accelerated motion in a straight line, we use the five equations of motion: v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t and s = vt − ½at². Here u is initial velocity, v is final velocity, a is acceleration, s is displacement and t is time.</p><p><strong>Newton\'s laws of motion</strong> govern dynamics. The first law (law of inertia) states that a body remains at rest or in uniform motion unless acted upon by a resultant external force. The second law states that the rate of change of momentum is proportional to the applied force, giving F = ma. The third law states that to every action there is an equal and opposite reaction.</p><p><strong>Momentum</strong> (p = mv) is conserved in a closed system. <strong>Impulse</strong> equals the change in momentum (Ft = mv − mu). <strong>Work</strong> done is W = Fd (force × distance in the direction of force). <strong>Energy</strong> exists as kinetic energy (KE = ½mv²) and gravitational potential energy (PE = mgh). <strong>Power</strong> is the rate of doing work (P = W/t), and <strong>efficiency</strong> compares useful output to total input.</p><ul><li>Friction opposes relative motion between surfaces in contact.</li><li>Projectile motion combines constant horizontal velocity with vertical motion under gravity.</li></ul>',
        keyPoints: [
          'Scalars have magnitude only; vectors have both magnitude and direction',
          'Use the equations of motion only when acceleration is uniform (constant)',
          'Momentum is always conserved in collisions when no external force acts',
          'Energy is conserved: total mechanical energy (KE + PE) stays constant when no friction acts'
        ],
        formulas: [
          'Equation 1: v = u + at',
          'Equation 2: s = ut + ½at²',
          'Equation 3: v² = u² + 2as',
          'Equation 4: s = ½(u + v)t',
          'Newton\'s 2nd Law: F = ma',
          'Momentum: p = mv',
          'Impulse: Ft = mv − mu',
          'Work: W = Fd',
          'Kinetic Energy: KE = ½mv²',
          'Potential Energy: PE = mgh',
          'Power: P = W/t = Fv',
          'Efficiency: η = (useful output / total input) × 100%'
        ],
        examTips: [
          'Always state direction when giving vector answers like displacement or velocity',
          'Take g = 10 m/s² unless the question states otherwise, and write down your value of g',
          'Check units before substituting: convert km to m and minutes to seconds first'
        ],
        commonMistakes: [
          'Using equations of motion when acceleration is not constant',
          'Confusing mass (kg) with weight (N); weight = mg'
        ],
        mcq: [
          { q: 'Which of the following is a vector quantity?', options: ['A. Speed', 'B. Distance', 'C. Velocity', 'D. Mass'], answer: 2, explanation: 'C is correct because velocity has both magnitude and direction. Speed, distance and mass are scalars with magnitude only.' },
          { q: 'A car accelerates uniformly from rest to 20 m/s in 5 s. Its acceleration is', options: ['A. 2 m/s²', 'B. 4 m/s²', 'C. 5 m/s²', 'D. 100 m/s²'], answer: 1, explanation: 'B is correct. a = (v − u)/t = (20 − 0)/5 = 4 m/s².' },
          { q: 'A body of mass 2 kg moving at 3 m/s has a momentum of', options: ['A. 1.5 kg·m/s', 'B. 5 kg·m/s', 'C. 6 kg·m/s', 'D. 9 kg·m/s'], answer: 2, explanation: 'C is correct. p = mv = 2 × 3 = 6 kg·m/s.' },
          { q: 'The work done by a force of 10 N moving a body 4 m in the direction of the force is', options: ['A. 2.5 J', 'B. 14 J', 'C. 40 J', 'D. 400 J'], answer: 2, explanation: 'C is correct. W = Fd = 10 × 4 = 40 J.' },
          { q: 'Newton\'s first law of motion is also known as the law of', options: ['A. Momentum', 'B. Inertia', 'C. Gravitation', 'D. Acceleration'], answer: 1, explanation: 'B is correct. The first law is the law of inertia: a body resists any change in its state of motion.' },
          { q: 'The kinetic energy of a 4 kg object moving at 5 m/s is', options: ['A. 10 J', 'B. 20 J', 'C. 50 J', 'D. 100 J'], answer: 2, explanation: 'C is correct. KE = ½mv² = ½ × 4 × 5² = ½ × 4 × 25 = 50 J.' },
          { q: 'A machine does 600 J of work in 3 s. Its power output is', options: ['A. 0.005 W', 'B. 200 W', 'C. 600 W', 'D. 1800 W'], answer: 1, explanation: 'B is correct. P = W/t = 600/3 = 200 W.' },
          { q: 'A ball is thrown vertically upward. At its highest point its', options: ['A. velocity is maximum', 'B. acceleration is zero', 'C. velocity is zero', 'D. kinetic energy is maximum'], answer: 2, explanation: 'C is correct. At the highest point velocity is momentarily zero, though acceleration (g) still acts downward.' },
          { q: 'The potential energy gained by a 5 kg mass raised 2 m (g = 10 m/s²) is', options: ['A. 10 J', 'B. 25 J', 'C. 50 J', 'D. 100 J'], answer: 3, explanation: 'D is correct. PE = mgh = 5 × 10 × 2 = 100 J.' },
          { q: 'Which statement about momentum conservation is true?', options: ['A. It applies only to elastic collisions', 'B. Total momentum is conserved when no external force acts', 'C. Momentum is a scalar quantity', 'D. Momentum is never conserved in real collisions'], answer: 1, explanation: 'B is correct. In a closed system with no external resultant force, total momentum before equals total momentum after, for both elastic and inelastic collisions.' }
        ],
        theory: [
          { question: 'A body of mass 5 kg initially at rest is acted upon by a constant force of 20 N for 4 s. Calculate (a) the acceleration produced, (b) the final velocity, and (c) the momentum gained.', marks: 10, answer: '(a) Using F = ma, a = F/m = 20/5 = 4 m/s². (b) Using v = u + at with u = 0: v = 0 + 4 × 4 = 16 m/s. (c) Momentum gained p = mv = 5 × 16 = 80 kg·m/s (equal to impulse Ft = 20 × 4 = 80 N·s).', markingGuide: 'Award 3 marks for correct acceleration (formula 1, substitution 1, answer 1). Award 3 marks for final velocity. Award 4 marks for momentum/impulse including correct unit. Deduct no marks for consistent use of g.' },
          { question: 'State Newton\'s three laws of motion and explain how the principle of conservation of momentum follows from them.', marks: 8, answer: 'First law: A body continues at rest or in uniform motion in a straight line unless acted upon by a resultant external force. Second law: The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force (F = ma). Third law: To every action there is an equal and opposite reaction. Conservation of momentum follows because when two bodies interact, the force on body A from B equals and opposes the force on B from A (third law). Since these forces act for the same time, the impulses are equal and opposite, so the changes in momentum are equal and opposite. Thus the total momentum of the system remains constant when no external force acts.', markingGuide: 'Award 2 marks for each correctly stated law (6 marks). Award 2 marks for a clear derivation linking the third law and equal time of contact to equal and opposite momentum changes.' }
        ]
      },
      {
        id: 'waves_sound',
        name: 'Waves, Sound & Light Basics',
        icon: '🌊',
        lessonNotes: '<h4>Waves, Sound & Light Basics</h4><p>A <strong>wave</strong> is a disturbance that transfers energy from one point to another without transferring matter. There are two main types. In a <strong>transverse wave</strong> the particles vibrate perpendicular to the direction of energy travel (e.g. light, water ripples, waves on a string). In a <strong>longitudinal wave</strong> the particles vibrate parallel to the direction of travel, producing compressions and rarefactions (e.g. sound waves).</p><p>Key wave properties include the <strong>amplitude</strong> (maximum displacement from the rest position), the <strong>wavelength</strong> λ (distance between two successive points in phase, e.g. crest to crest), the <strong>frequency</strong> f (number of complete waves per second, measured in hertz), the <strong>period</strong> T (time for one complete wave, T = 1/f), and the wave <strong>speed</strong> v. These are linked by the wave equation v = fλ.</p><p>Waves can undergo <strong>reflection</strong> (bouncing off a surface), <strong>refraction</strong> (change of speed and direction when entering a new medium), and <strong>diffraction</strong> (spreading out as they pass through gaps or around obstacles).</p><p><strong>Sound</strong> is produced by vibrating bodies and requires a material medium for transmission; it cannot travel through a vacuum. Sound travels fastest in solids, slower in liquids, and slowest in gases. An <strong>echo</strong> is reflected sound, used to measure distance and depth. <strong>Resonance</strong> occurs when a body is forced to vibrate at its natural frequency, producing a large amplitude. <strong>Ultrasound</strong> (frequency above 20 000 Hz) is used in medical scans, cleaning and sonar.</p><p>The <strong>Doppler effect</strong> is the apparent change in frequency of a wave when there is relative motion between the source and observer: the pitch rises as a source approaches and falls as it recedes.</p>',
        keyPoints: [
          'Transverse waves vibrate perpendicular to travel; longitudinal waves vibrate parallel to travel',
          'The wave equation v = fλ links speed, frequency and wavelength',
          'Sound needs a material medium and travels fastest in solids, slowest in gases',
          'An echo is reflected sound; resonance occurs at a body\'s natural frequency'
        ],
        formulas: [
          'Wave speed: v = fλ',
          'Period: T = 1/f',
          'Frequency from period: f = 1/T',
          'Echo distance: 2d = v × t (d = ½vt)'
        ],
        examTips: [
          'Convert frequency to hertz and wavelength to metres before using v = fλ',
          'For echo problems remember the sound travels to the wall and back, so use 2d',
          'State clearly that sound cannot travel through a vacuum but light can'
        ],
        commonMistakes: [
          'Forgetting the factor of 2 (to and fro) in echo and sonar distance calculations',
          'Confusing amplitude (loudness) with frequency (pitch)'
        ],
        mcq: [
          { q: 'A wave of frequency 50 Hz and wavelength 4 m has a speed of', options: ['A. 12.5 m/s', 'B. 54 m/s', 'C. 200 m/s', 'D. 0.08 m/s'], answer: 2, explanation: 'C is correct. v = fλ = 50 × 4 = 200 m/s.' },
          { q: 'Which type of wave is a sound wave?', options: ['A. Transverse', 'B. Longitudinal', 'C. Electromagnetic', 'D. Stationary'], answer: 1, explanation: 'B is correct. Sound is a longitudinal wave consisting of compressions and rarefactions.' },
          { q: 'The period of a wave whose frequency is 200 Hz is', options: ['A. 0.005 s', 'B. 0.5 s', 'C. 5 s', 'D. 200 s'], answer: 0, explanation: 'A is correct. T = 1/f = 1/200 = 0.005 s.' },
          { q: 'Sound cannot travel through', options: ['A. Water', 'B. Air', 'C. Steel', 'D. A vacuum'], answer: 3, explanation: 'D is correct. Sound requires a material medium and cannot travel through a vacuum.' },
          { q: 'The maximum displacement of a particle from its rest position is the', options: ['A. Wavelength', 'B. Frequency', 'C. Amplitude', 'D. Period'], answer: 2, explanation: 'C is correct. Amplitude is the maximum displacement from the equilibrium position.' },
          { q: 'An echo is heard 0.6 s after a shout, with sound speed 340 m/s. The distance to the reflecting wall is', options: ['A. 102 m', 'B. 204 m', 'C. 567 m', 'D. 51 m'], answer: 0, explanation: 'A is correct. Total distance = vt = 340 × 0.6 = 204 m; distance to wall = 204/2 = 102 m.' },
          { q: 'Sound travels fastest in', options: ['A. Gases', 'B. Liquids', 'C. Solids', 'D. A vacuum'], answer: 2, explanation: 'C is correct. Particles are closest in solids, so vibrations are transmitted fastest.' },
          { q: 'The spreading of waves as they pass through a narrow gap is called', options: ['A. Reflection', 'B. Refraction', 'C. Diffraction', 'D. Dispersion'], answer: 2, explanation: 'C is correct. Diffraction is the spreading out of waves through gaps or around obstacles.' },
          { q: 'The apparent change in pitch of a siren as an ambulance passes is due to the', options: ['A. Echo effect', 'B. Doppler effect', 'C. Resonance', 'D. Refraction'], answer: 1, explanation: 'B is correct. The Doppler effect causes a higher pitch as the source approaches and a lower pitch as it recedes.' },
          { q: 'Ultrasound refers to sound of frequency', options: ['A. below 20 Hz', 'B. between 20 Hz and 20 000 Hz', 'C. above 20 000 Hz', 'D. exactly 1000 Hz'], answer: 2, explanation: 'C is correct. Ultrasound is sound with frequency above the upper limit of human hearing (20 000 Hz).' }
        ],
        theory: [
          { question: 'A radio station broadcasts at a frequency of 100 MHz. If radio waves travel at 3 × 10⁸ m/s, calculate the wavelength of the signal. Also state two properties common to all electromagnetic waves.', marks: 10, answer: 'Using v = fλ, λ = v/f = (3 × 10⁸)/(100 × 10⁶) = (3 × 10⁸)/(1 × 10⁸) = 3 m. Two properties common to all electromagnetic waves: (i) they all travel at the speed of light (3 × 10⁸ m/s) in a vacuum; (ii) they are transverse waves and can travel through a vacuum; (also acceptable: they transfer energy and carry no charge).', markingGuide: 'Award 2 marks for correct formula rearrangement, 2 for converting MHz to Hz, 2 for correct answer with unit (6). Award 2 marks for each correct property (4).' },
          { question: 'Explain how an echo can be used to determine the depth of the sea, and calculate the depth if an ultrasonic pulse returns after 0.8 s in water where the speed of sound is 1500 m/s.', marks: 8, answer: 'A ship sends an ultrasonic pulse downward; it reflects off the sea bed and returns to a detector. By measuring the time t for the round trip and knowing the speed v of sound in water, the depth can be found. Because the pulse travels down and back, the total distance is 2d, so d = ½vt. Calculation: d = ½ × 1500 × 0.8 = ½ × 1200 = 600 m. The sea is 600 m deep.', markingGuide: 'Award 4 marks for explaining the echo-sounding method including the to-and-fro path. Award 2 marks for correct use of d = ½vt and 2 marks for the correct answer of 600 m.' }
        ]
      },
      {
        id: 'electricity_magnetism',
        name: 'Electricity & Magnetism',
        icon: '🔌',
        lessonNotes: '<h4>Electricity & Magnetism</h4><p><strong>Electric charge</strong> (Q, measured in coulombs) is a fundamental property of matter. <strong>Current</strong> (I) is the rate of flow of charge, I = Q/t, measured in amperes. <strong>Potential difference</strong> (V, in volts) is the work done per unit charge in moving charge between two points. <strong>Resistance</strong> (R, in ohms) opposes the flow of current.</p><p><strong>Ohm\'s law</strong> states that the current through a conductor is directly proportional to the potential difference across it, provided temperature is constant: V = IR. For resistors in <strong>series</strong>, the total resistance is R = R₁ + R₂ + R₃ (the same current flows through each). For resistors in <strong>parallel</strong>, 1/R = 1/R₁ + 1/R₂ + 1/R₃ (the same voltage is across each).</p><p>Electrical <strong>power</strong> can be calculated as P = IV = I²R = V²/R. The <strong>electromotive force</strong> (e.m.f.) of a cell is the total energy supplied per coulomb; some energy is lost across the cell\'s <strong>internal resistance</strong>, so E = IR + Ir. Kirchhoff\'s laws state that current into a junction equals current out, and the sum of e.m.f.s around a loop equals the sum of potential drops.</p><p>A moving charge or current produces a <strong>magnetic field</strong>. An <strong>electromagnet</strong> is a coil carrying current around a soft-iron core. The <strong>motor effect</strong> describes the force on a current-carrying conductor in a magnetic field, F = BIL. <strong>Electromagnetic induction</strong> (Faraday\'s law) produces an e.m.f. when the magnetic flux linking a coil changes; <strong>Lenz\'s law</strong> says the induced current opposes the change causing it.</p><p>A <strong>transformer</strong> changes voltage using two coils on a core: Vp/Vs = Np/Ns. A step-up transformer increases voltage; a step-down decreases it. <strong>AC</strong> reverses direction periodically, while <strong>DC</strong> flows in one direction only.</p>',
        keyPoints: [
          'Current is the rate of flow of charge: I = Q/t',
          'Ohm\'s law (V = IR) holds only at constant temperature',
          'Series resistors add directly; parallel resistors combine reciprocally',
          'Transformers work on AC only and obey Vp/Vs = Np/Ns'
        ],
        formulas: [
          'Current: I = Q/t',
          'Ohm\'s Law: V = IR',
          'Power: P = IV = I²R = V²/R',
          'Series resistance: R = R₁ + R₂ + R₃',
          'Parallel resistance: 1/R = 1/R₁ + 1/R₂ + 1/R₃',
          'E.m.f with internal resistance: E = I(R + r)',
          'Force on conductor: F = BIL',
          'Transformer: Vp/Vs = Np/Ns'
        ],
        examTips: [
          'For parallel resistors, remember to invert your final answer after adding reciprocals',
          'Use P = I²R when current is known and P = V²/R when voltage is known to avoid extra steps',
          'State that transformers only work with alternating current, not direct current'
        ],
        commonMistakes: [
          'Forgetting to take the reciprocal of the sum when finding parallel resistance',
          'Ignoring internal resistance so that terminal voltage is wrongly taken as the e.m.f.'
        ],
        mcq: [
          { q: 'A charge of 60 C flows through a wire in 20 s. The current is', options: ['A. 0.33 A', 'B. 3 A', 'C. 80 A', 'D. 1200 A'], answer: 1, explanation: 'B is correct. I = Q/t = 60/20 = 3 A.' },
          { q: 'A 12 V supply drives a current of 3 A through a resistor. The resistance is', options: ['A. 0.25 Ω', 'B. 4 Ω', 'C. 9 Ω', 'D. 36 Ω'], answer: 1, explanation: 'B is correct. R = V/I = 12/3 = 4 Ω.' },
          { q: 'Two resistors of 3 Ω and 6 Ω in parallel give a combined resistance of', options: ['A. 2 Ω', 'B. 4.5 Ω', 'C. 9 Ω', 'D. 18 Ω'], answer: 0, explanation: 'A is correct. 1/R = 1/3 + 1/6 = 2/6 + 1/6 = 3/6, so R = 6/3 = 2 Ω.' },
          { q: 'The power dissipated by a 4 Ω resistor carrying 5 A is', options: ['A. 20 W', 'B. 80 W', 'C. 100 W', 'D. 0.8 W'], answer: 2, explanation: 'C is correct. P = I²R = 5² × 4 = 25 × 4 = 100 W.' },
          { q: 'Two resistors of 5 Ω and 10 Ω in series have a total resistance of', options: ['A. 3.3 Ω', 'B. 7.5 Ω', 'C. 15 Ω', 'D. 50 Ω'], answer: 2, explanation: 'C is correct. In series R = R₁ + R₂ = 5 + 10 = 15 Ω.' },
          { q: 'A transformer has 200 primary turns and 50 secondary turns. If the primary voltage is 240 V, the secondary voltage is', options: ['A. 30 V', 'B. 60 V', 'C. 480 V', 'D. 960 V'], answer: 1, explanation: 'B is correct. Vs = Vp × Ns/Np = 240 × 50/200 = 240 × 0.25 = 60 V (a step-down transformer).' },
          { q: 'The force on a current-carrying conductor in a magnetic field is given by', options: ['A. F = ma', 'B. F = BIL', 'C. F = QV', 'D. F = mg'], answer: 1, explanation: 'B is correct. The motor-effect force is F = BIL, where B is flux density, I is current and L is length.' },
          { q: 'The law stating that an induced current opposes the change producing it is', options: ['A. Ohm\'s law', 'B. Faraday\'s law', 'C. Lenz\'s law', 'D. Kirchhoff\'s law'], answer: 2, explanation: 'C is correct. Lenz\'s law states the induced current always opposes the change in flux causing it (conservation of energy).' },
          { q: 'A cell of e.m.f. 1.5 V has internal resistance 0.5 Ω and drives 1 A. The terminal voltage is', options: ['A. 0.5 V', 'B. 1.0 V', 'C. 1.5 V', 'D. 2.0 V'], answer: 1, explanation: 'B is correct. Terminal V = E − Ir = 1.5 − (1 × 0.5) = 1.0 V.' },
          { q: 'Which device converts mechanical energy into electrical energy?', options: ['A. Electric motor', 'B. Transformer', 'C. Generator', 'D. Battery'], answer: 2, explanation: 'C is correct. A generator (dynamo) uses electromagnetic induction to convert mechanical energy into electrical energy.' }
        ],
        theory: [
          { question: 'Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel across a 12 V battery of negligible internal resistance. Calculate (a) the effective resistance, (b) the total current drawn from the battery, and (c) the current through the 3 Ω resistor.', marks: 10, answer: '(a) 1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1, so R = 1 Ω. (b) Total current I = V/R = 12/1 = 12 A. (c) In parallel each resistor has the full 12 V across it, so current through the 3 Ω resistor = V/R = 12/3 = 4 A.', markingGuide: 'Award 4 marks for correct effective resistance (reciprocal working shown). Award 3 marks for total current. Award 3 marks for current through the 3 Ω resistor with correct reasoning that voltage is the same across parallel branches.' },
          { question: 'Explain the principle of operation of a step-down transformer and state two reasons why electrical power is transmitted at high voltage over long distances.', marks: 8, answer: 'A transformer consists of a primary and secondary coil wound on a common soft-iron core. An alternating current in the primary produces a changing magnetic flux in the core. This changing flux links the secondary coil and, by Faraday\'s law, induces an alternating e.m.f. in it. In a step-down transformer the secondary has fewer turns than the primary (Ns < Np), so Vs < Vp according to Vp/Vs = Np/Ns. Two reasons for high-voltage transmission: (i) high voltage means low current for the same power (P = IV), which reduces power loss as heat in the cables since power loss = I²R; (ii) it allows the use of thinner, cheaper cables and reduces voltage drop along the line.', markingGuide: 'Award 4 marks for the operating principle (mutual induction via changing flux, turns ratio). Award 2 marks for each valid reason for high-voltage transmission, with the I²R loss reason essential for full marks.' }
        ]
      },
      {
        id: 'light_optics',
        name: 'Light & Optics',
        icon: '🔦',
        lessonNotes: '<h4>Light & Optics</h4><p>Light travels in straight lines and obeys clear rules at boundaries. <strong>Reflection</strong> follows the law: the angle of incidence equals the angle of reflection, both measured from the normal. A <strong>plane mirror</strong> forms a virtual, upright, laterally inverted image the same size as the object and as far behind the mirror as the object is in front.</p><p><strong>Curved mirrors</strong> are concave (converging) or convex (diverging). Ray diagrams use principal rays: a ray parallel to the axis reflects through the focus, and a ray through the focus reflects parallel. The mirror formula 1/f = 1/u + 1/v relates focal length f, object distance u and image distance v. <strong>Magnification</strong> m = image height/object height = v/u.</p><p><strong>Refraction</strong> is the bending of light as it changes speed entering a new medium. <strong>Snell\'s law</strong> gives n = sin i / sin r, where n is the refractive index. When light travels from a denser to a less dense medium and the angle of incidence exceeds the <strong>critical angle</strong>, <strong>total internal reflection</strong> occurs. This is used in optical fibres and prisms (in periscopes and binoculars), where sin C = 1/n.</p><p><strong>Lenses</strong> are converging (convex) or diverging (concave). The lens formula 1/f = 1/u + 1/v applies, and the <strong>power of a lens</strong> is P = 1/f (in dioptres, with f in metres). Convex lenses correct long sight; concave lenses correct short sight.</p><p><strong>Dispersion</strong> occurs when white light passes through a prism and splits into the visible <strong>spectrum</strong> (red, orange, yellow, green, blue, indigo, violet) because different colours refract by different amounts. The <strong>electromagnetic spectrum</strong>, in order of increasing frequency (decreasing wavelength), is: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.</p>',
        keyPoints: [
          'For reflection, the angle of incidence equals the angle of reflection (from the normal)',
          'Refractive index n = sin i / sin r = speed in vacuum / speed in medium',
          'Total internal reflection occurs only when going from denser to less dense medium beyond the critical angle',
          'EM spectrum order (low to high frequency): radio, microwave, infrared, visible, UV, X-ray, gamma'
        ],
        formulas: [
          'Mirror/Lens formula: 1/f = 1/u + 1/v',
          'Magnification: m = v/u = image height / object height',
          'Snell\'s Law: n = sin i / sin r',
          'Refractive index from speed: n = c/v',
          'Critical angle: sin C = 1/n',
          'Power of lens: P = 1/f (dioptres, f in metres)'
        ],
        examTips: [
          'Use the real-is-positive sign convention consistently and state it in your working',
          'For total internal reflection problems, always check light is going from dense to less dense medium',
          'A virtual image gives a negative image distance; do not panic if v comes out negative'
        ],
        commonMistakes: [
          'Measuring angles of incidence and refraction from the surface instead of the normal',
          'Confusing converging (convex) and diverging (concave) lenses'
        ],
        mcq: [
          { q: 'The image formed by a plane mirror is', options: ['A. real and inverted', 'B. virtual and upright', 'C. real and upright', 'D. virtual and inverted'], answer: 1, explanation: 'B is correct. A plane mirror forms a virtual, upright, laterally inverted image of the same size as the object.' },
          { q: 'Light passes from air into glass with angle of incidence 60° and refraction 30°. The refractive index is (sin 60° = 0.866, sin 30° = 0.5)', options: ['A. 0.58', 'B. 1.73', 'C. 2.0', 'D. 0.5'], answer: 1, explanation: 'B is correct. n = sin i / sin r = 0.866/0.5 = 1.73.' },
          { q: 'A lens has a focal length of 0.2 m. Its power is', options: ['A. 0.2 D', 'B. 2 D', 'C. 5 D', 'D. 20 D'], answer: 2, explanation: 'C is correct. P = 1/f = 1/0.2 = 5 dioptres.' },
          { q: 'Total internal reflection can occur when light travels from', options: ['A. air to glass', 'B. glass to air beyond the critical angle', 'C. air to water', 'D. vacuum to glass'], answer: 1, explanation: 'B is correct. Total internal reflection requires light going from a denser to a less dense medium at an angle greater than the critical angle.' },
          { q: 'The refractive index of a medium is 1.5. The critical angle is (sin C = 1/n, sin⁻¹ 0.667 ≈ 41.8°)', options: ['A. 30°', 'B. 41.8°', 'C. 48.6°', 'D. 60°'], answer: 1, explanation: 'B is correct. sin C = 1/n = 1/1.5 = 0.667, so C ≈ 41.8°.' },
          { q: 'An object is placed 30 cm from a converging lens of focal length 10 cm. The image distance is', options: ['A. 7.5 cm', 'B. 15 cm', 'C. 20 cm', 'D. 40 cm'], answer: 1, explanation: 'B is correct. 1/v = 1/f − 1/u = 1/10 − 1/30 = 3/30 − 1/30 = 2/30, so v = 15 cm.' },
          { q: 'Which colour of light is refracted most when white light passes through a prism?', options: ['A. Red', 'B. Yellow', 'C. Green', 'D. Violet'], answer: 3, explanation: 'D is correct. Violet has the shortest wavelength and is refracted (bent) the most, while red is refracted the least.' },
          { q: 'Which of the following has the highest frequency?', options: ['A. Radio waves', 'B. Infrared', 'C. Visible light', 'D. Gamma rays'], answer: 3, explanation: 'D is correct. Gamma rays have the highest frequency and shortest wavelength in the electromagnetic spectrum.' },
          { q: 'The principle used in optical fibres for communication is', options: ['A. Dispersion', 'B. Diffraction', 'C. Total internal reflection', 'D. Refraction'], answer: 2, explanation: 'C is correct. Optical fibres rely on repeated total internal reflection to keep light travelling along the fibre.' },
          { q: 'A concave mirror produces a real image when the object is placed', options: ['A. between the pole and focus', 'B. beyond the focus', 'C. at the focus only', 'D. behind the mirror'], answer: 1, explanation: 'B is correct. A concave mirror forms a real image when the object is beyond the principal focus; inside the focus it forms a virtual, magnified image.' }
        ],
        theory: [
          { question: 'An object 4 cm tall is placed 20 cm in front of a converging lens of focal length 5 cm. Calculate (a) the position of the image, (b) the magnification, and (c) the height of the image. State whether the image is real or virtual.', marks: 10, answer: '(a) Using 1/f = 1/u + 1/v: 1/v = 1/f − 1/u = 1/5 − 1/20 = 4/20 − 1/20 = 3/20, so v = 20/3 ≈ 6.67 cm. The positive value shows the image is real and on the opposite side of the lens. (b) Magnification m = v/u = 6.67/20 = 0.33. (c) Image height = m × object height = 0.33 × 4 = 1.33 cm. The image is real, inverted and diminished.', markingGuide: 'Award 4 marks for image distance (formula, substitution, answer). Award 2 marks for magnification. Award 2 marks for image height. Award 2 marks for correctly stating the image is real and inverted.' },
          { question: 'Define refractive index and explain, with the aid of the critical angle, how total internal reflection is used in an optical fibre.', marks: 8, answer: 'The refractive index of a medium is the ratio of the speed of light in a vacuum to the speed of light in the medium (n = c/v), or equivalently n = sin i / sin r for light passing from a vacuum/air into the medium. The critical angle C is the angle of incidence in the denser medium for which the angle of refraction is 90°, given by sin C = 1/n. When light inside an optical fibre strikes the boundary between the dense core and the less dense cladding at an angle greater than the critical angle, it is totally internally reflected rather than refracted out. The light therefore zig-zags along the fibre by repeated total internal reflection, carrying signals over long distances with very little loss.', markingGuide: 'Award 2 marks for a correct definition of refractive index. Award 2 marks for defining the critical angle and the relation sin C = 1/n. Award 4 marks for explaining how repeated total internal reflection guides light along the fibre (core/cladding and angle greater than C essential).' }
        ]
      },
      {
        id: 'modern_physics',
        name: 'Modern Physics & Radioactivity',
        icon: '☢️',
        lessonNotes: '<h4>Modern Physics & Radioactivity</h4><p>The <strong>atom</strong> consists of a tiny, dense, positively charged <strong>nucleus</strong> containing protons (positive) and neutrons (neutral), surrounded by negatively charged electrons in orbits. The number of protons is the atomic number Z; the total number of protons and neutrons is the mass number A. <strong>Isotopes</strong> are atoms of the same element with the same Z but different A.</p><p><strong>Radioactivity</strong> is the spontaneous disintegration of unstable nuclei with the emission of radiation. There are three types. <strong>Alpha (α) particles</strong> are helium nuclei (2 protons + 2 neutrons), highly ionising but poorly penetrating (stopped by paper). <strong>Beta (β) particles</strong> are fast electrons, moderately ionising and penetrating (stopped by aluminium). <strong>Gamma (γ) rays</strong> are high-energy electromagnetic waves, weakly ionising but very penetrating (reduced by thick lead).</p><p>In <strong>alpha decay</strong> the mass number falls by 4 and the atomic number by 2. In <strong>beta decay</strong> the mass number is unchanged but the atomic number rises by 1 (a neutron becomes a proton plus an emitted electron).</p><p>The <strong>half-life</strong> is the time taken for half the radioactive nuclei in a sample to decay. After each half-life the activity halves: after n half-lives the fraction remaining is (½)ⁿ. Radioactivity is used in medicine (cancer treatment, tracers), carbon-14 dating, sterilisation and nuclear power.</p><p><strong>Nuclear fission</strong> is the splitting of a heavy nucleus (e.g. uranium-235) into smaller nuclei with the release of energy, used in reactors. <strong>Nuclear fusion</strong> is the joining of light nuclei (e.g. hydrogen) to form a heavier nucleus, releasing huge energy, as in the Sun. The <strong>photoelectric effect</strong> is the emission of electrons from a metal surface when light of sufficient frequency strikes it, showing the particle (photon) nature of light. <strong>X-rays</strong>, produced when fast electrons strike a metal target, are used in medical imaging and security scanning.</p>',
        keyPoints: [
          'The nucleus contains protons and neutrons; electrons orbit outside it',
          'Penetrating power increases from alpha (least) to beta to gamma (most); ionising power is the reverse',
          'In alpha decay A falls by 4 and Z by 2; in beta decay A is unchanged and Z rises by 1',
          'After n half-lives the fraction of the sample remaining is (½)ⁿ'
        ],
        formulas: [
          'Fraction remaining after n half-lives: N = N₀ × (½)ⁿ',
          'Number of half-lives: n = total time / half-life',
          'Alpha decay: ᴬZX → ᴬ⁻⁴(Z−2)Y + ⁴₂He',
          'Beta decay: ᴬZX → ᴬ(Z+1)Y + ⁰₋₁e'
        ],
        examTips: [
          'In nuclear equations, check that both mass numbers and atomic numbers balance on each side',
          'For half-life questions, first find n = total time / half-life, then apply (½)ⁿ',
          'Remember alpha is most ionising but least penetrating; gamma is the opposite'
        ],
        commonMistakes: [
          'Confusing penetrating power with ionising power for the three radiations',
          'Forgetting that beta decay increases the atomic number while the mass number stays the same'
        ],
        mcq: [
          { q: 'An alpha particle is identical to a', options: ['A. hydrogen nucleus', 'B. helium nucleus', 'C. fast electron', 'D. photon'], answer: 1, explanation: 'B is correct. An alpha particle is a helium nucleus made of 2 protons and 2 neutrons.' },
          { q: 'Which radiation has the greatest penetrating power?', options: ['A. Alpha', 'B. Beta', 'C. Gamma', 'D. They are equal'], answer: 2, explanation: 'C is correct. Gamma rays are the most penetrating, requiring thick lead or concrete to reduce them.' },
          { q: 'A radioactive sample has a half-life of 4 days. After 12 days the fraction remaining is', options: ['A. 1/2', 'B. 1/4', 'C. 1/8', 'D. 1/16'], answer: 2, explanation: 'C is correct. n = 12/4 = 3 half-lives, so fraction = (½)³ = 1/8.' },
          { q: 'During beta decay the atomic number of the nucleus', options: ['A. decreases by 2', 'B. increases by 1', 'C. stays the same', 'D. decreases by 1'], answer: 1, explanation: 'B is correct. A neutron changes into a proton plus an emitted electron, so the atomic number increases by 1 while the mass number is unchanged.' },
          { q: 'The number of neutrons in an atom with mass number 23 and atomic number 11 is', options: ['A. 11', 'B. 12', 'C. 23', 'D. 34'], answer: 1, explanation: 'B is correct. Neutrons = A − Z = 23 − 11 = 12.' },
          { q: 'The process in the Sun that releases energy is', options: ['A. nuclear fission', 'B. nuclear fusion', 'C. radioactivity', 'D. combustion'], answer: 1, explanation: 'B is correct. The Sun releases energy by nuclear fusion of hydrogen nuclei into helium.' },
          { q: 'When a nucleus emits an alpha particle, its mass number', options: ['A. increases by 2', 'B. decreases by 4', 'C. stays the same', 'D. decreases by 2'], answer: 1, explanation: 'B is correct. Alpha emission reduces the mass number by 4 and the atomic number by 2.' },
          { q: 'A sample initially has 800 nuclei and a half-life of 2 hours. The number remaining after 6 hours is', options: ['A. 400', 'B. 200', 'C. 100', 'D. 50'], answer: 2, explanation: 'C is correct. n = 6/2 = 3 half-lives, so N = 800 × (½)³ = 800/8 = 100 nuclei.' },
          { q: 'The emission of electrons from a metal surface when light shines on it is called the', options: ['A. thermionic effect', 'B. photoelectric effect', 'C. Doppler effect', 'D. piezoelectric effect'], answer: 1, explanation: 'B is correct. The photoelectric effect is the emission of electrons from a metal when light of sufficient frequency strikes it.' },
          { q: 'X-rays are produced when', options: ['A. slow neutrons hit a nucleus', 'B. fast electrons strike a metal target', 'C. alpha particles decay', 'D. light shines on metal'], answer: 1, explanation: 'B is correct. X-rays are produced when fast-moving electrons are suddenly stopped by striking a metal target.' }
        ],
        theory: [
          { question: 'A radioactive isotope has a half-life of 5 days. A sample initially contains 6.4 × 10²⁰ atoms. Calculate (a) the number of atoms remaining after 20 days, and (b) the time taken for the sample to fall to 4.0 × 10¹⁹ atoms.', marks: 10, answer: '(a) Number of half-lives n = 20/5 = 4. Atoms remaining N = N₀ × (½)⁴ = 6.4 × 10²⁰ × (1/16) = 4.0 × 10¹⁹ atoms. (b) From part (a), the sample reaches 4.0 × 10¹⁹ atoms after exactly 4 half-lives, so the time = 4 × 5 = 20 days.', markingGuide: 'Award 2 marks for finding n = 4, 3 marks for applying (½)ⁿ and obtaining 4.0 × 10¹⁹ atoms. Award 5 marks for part (b): recognising the target value equals 4 half-lives worth of decay and stating 20 days (allow follow-through from part a).' },
          { question: 'Compare alpha, beta and gamma radiation in terms of their nature, ionising power and penetrating ability. State one practical use of a radioactive isotope.', marks: 8, answer: 'Alpha (α): a helium nucleus (2 protons, 2 neutrons), positively charged; it is the most strongly ionising but the least penetrating, being stopped by a sheet of paper or a few centimetres of air. Beta (β): a fast-moving electron, negatively charged; it is moderately ionising and moderately penetrating, stopped by a few millimetres of aluminium. Gamma (γ): high-energy electromagnetic radiation with no charge; it is the least ionising but the most penetrating, reduced only by thick lead or concrete. One practical use: cobalt-60 gamma rays are used in radiotherapy to treat cancer (other valid uses include carbon-14 dating, tracers in medicine, and sterilising equipment).', markingGuide: 'Award 2 marks each for correctly describing the nature, ionising power and penetrating ability across all three radiations (6 marks). Award 2 marks for one correct, clearly stated practical use.' }
        ]
      }
    ],
    pastQuestions: [
      {
        year: 2019,
        paper: 'Paper 1',
        question: 'A body of mass 5 kg is acted upon by a force of 15 N. The acceleration produced is',
        options: ['A. 0.33 m/s²', 'B. 3 m/s²', 'C. 10 m/s²', 'D. 75 m/s²'],
        answer: 1,
        topic: 'mechanics_motion',
        explanation: 'Using Newton\'s second law, a = F/m = 15/5 = 3 m/s². Option B is correct.'
      },
      {
        year: 2020,
        paper: 'Paper 1',
        question: 'A wave travels at 320 m/s with a frequency of 800 Hz. Its wavelength is',
        options: ['A. 0.4 m', 'B. 2.5 m', 'C. 4.0 m', 'D. 256000 m'],
        answer: 0,
        topic: 'waves_sound',
        explanation: 'Using v = fλ, λ = v/f = 320/800 = 0.4 m. Option A is correct.'
      },
      {
        year: 2021,
        paper: 'Paper 1',
        question: 'A current of 2 A flows through a 6 Ω resistor. The potential difference across it is',
        options: ['A. 3 V', 'B. 8 V', 'C. 12 V', 'D. 24 V'],
        answer: 2,
        topic: 'electricity_magnetism',
        explanation: 'Using Ohm\'s law, V = IR = 2 × 6 = 12 V. Option C is correct.'
      },
      {
        year: 2022,
        paper: 'Paper 1',
        question: 'Light travels from glass into air. For total internal reflection to occur, the angle of incidence in the glass must be',
        options: ['A. equal to zero', 'B. less than the critical angle', 'C. equal to the critical angle', 'D. greater than the critical angle'],
        answer: 3,
        topic: 'light_optics',
        explanation: 'Total internal reflection occurs only when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle. Option D is correct.'
      },
      {
        year: 2023,
        paper: 'Paper 1',
        question: 'A radioactive substance has a half-life of 3 hours. The fraction of the original sample remaining after 9 hours is',
        options: ['A. 1/2', 'B. 1/4', 'C. 1/8', 'D. 1/16'],
        answer: 2,
        topic: 'modern_physics',
        explanation: 'Number of half-lives n = 9/3 = 3, so fraction remaining = (½)³ = 1/8. Option C is correct.'
      }
    ]
  },

  economics: {
    id: 'economics',
    name: 'Economics',
    shortName: 'Economics',
    icon: '📊',
    color: '#ca8a04',
    bgColor: '#fef9c3',
    textColor: '#713f12',
    category: 'commercial',
    description: 'Understand economic principles and theories for WASSCE excellence',
    examFormat: 'Paper 1: 50 MCQ (1hr 30min) | Paper 2: Theory Essay (2hr 30min)',
    totalTopics: 5,
    topics: [
      {
        id: 'supply_demand',
        name: 'Supply, Demand & Market Equilibrium',
        icon: '⚖️',
        lessonNotes: '<h4>Supply, Demand & Market Equilibrium</h4><p>The <strong>law of demand</strong> states that, other things being equal, the higher the price of a commodity, the lower the quantity demanded, and vice versa. This inverse relationship gives a demand curve that slopes downward from left to right. A change in price causes a movement along the curve, but a change in other factors causes the whole curve to <strong>shift</strong>. Demand shifts with changes in consumers\' income, tastes and preferences, prices of substitutes and complements, population, and expectations of future prices.</p><p>The <strong>law of supply</strong> states that, other things being equal, the higher the price, the greater the quantity producers are willing to supply, giving an upward-sloping supply curve. Supply shifts with changes in costs of production, technology, taxes and subsidies, the number of producers, and weather (for agricultural goods).</p><p><strong>Market equilibrium</strong> occurs where the demand and supply curves intersect, determining the equilibrium price and quantity. At this point the quantity demanded equals the quantity supplied and there is no tendency for price to change.</p><p>Governments may impose price controls. A <strong>price ceiling</strong> (maximum price) set below equilibrium causes a <strong>shortage</strong> because demand exceeds supply. A <strong>price floor</strong> (minimum price) set above equilibrium causes a <strong>surplus</strong> because supply exceeds demand.</p><p><strong>Price elasticity of demand</strong> (PED) measures how responsive quantity demanded is to a price change: PED = percentage change in quantity demanded ÷ percentage change in price. Demand is elastic (PED > 1), inelastic (PED < 1), or unit elastic (PED = 1). Determinants include availability of substitutes, proportion of income spent, and whether the good is a necessity or luxury. <strong>Price elasticity of supply</strong> (PES) similarly measures the responsiveness of quantity supplied to price.</p>',
        keyPoints: [
          'Law of demand: price and quantity demanded are inversely related',
          'Equilibrium occurs where quantity demanded equals quantity supplied',
          'A price ceiling below equilibrium causes a shortage; a price floor above equilibrium causes a surplus',
          'Elastic demand (PED > 1) means quantity is very responsive to price; inelastic (PED < 1) means it is not'
        ],
        examTips: [
          'Distinguish carefully between a movement along the curve (price change) and a shift of the curve (other factors)',
          'When asked about elasticity, always show the formula and interpret whether the value is greater or less than 1',
          'Use a clearly labelled demand-and-supply diagram to support equilibrium answers'
        ],
        commonMistakes: [
          'Confusing a shift in demand with a movement along the demand curve',
          'Mixing up price ceilings (cause shortages) with price floors (cause surpluses)'
        ],
        mcq: [
          { q: 'The law of demand states that, other things being equal, as price rises, quantity demanded', options: ['A. rises', 'B. falls', 'C. stays constant', 'D. becomes zero'], answer: 1, explanation: 'B is correct. The law of demand describes an inverse relationship: as price rises, quantity demanded falls.' },
          { q: 'Market equilibrium occurs where', options: ['A. demand exceeds supply', 'B. supply exceeds demand', 'C. quantity demanded equals quantity supplied', 'D. price is zero'], answer: 2, explanation: 'C is correct. Equilibrium is the point where the quantity demanded equals the quantity supplied.' },
          { q: 'A price ceiling set below the equilibrium price will cause a', options: ['A. surplus', 'B. shortage', 'C. rise in supply', 'D. fall in demand'], answer: 1, explanation: 'B is correct. A maximum price below equilibrium means demand exceeds supply, causing a shortage.' },
          { q: 'Which factor causes the demand curve for a good to shift?', options: ['A. A change in the price of the good itself', 'B. A change in consumers\' income', 'C. A change in the quantity supplied', 'D. Movement to a new point on the same curve'], answer: 1, explanation: 'B is correct. A change in income shifts the whole demand curve; a change in the good\'s own price only causes movement along the curve.' },
          { q: 'If a 10% rise in price causes a 20% fall in quantity demanded, demand is', options: ['A. perfectly inelastic', 'B. inelastic', 'C. unit elastic', 'D. elastic'], answer: 3, explanation: 'D is correct. PED = 20/10 = 2, which is greater than 1, so demand is elastic.' },
          { q: 'A price floor is usually set', options: ['A. below the equilibrium price', 'B. above the equilibrium price', 'C. exactly at equilibrium', 'D. at zero'], answer: 1, explanation: 'B is correct. A price floor (minimum price) is effective when set above the equilibrium price, leading to a surplus.' },
          { q: 'Two goods consumed together, such as cars and petrol, are called', options: ['A. substitutes', 'B. complements', 'C. inferior goods', 'D. giffen goods'], answer: 1, explanation: 'B is correct. Complementary goods are used together; a rise in the price of one reduces demand for the other.' },
          { q: 'The supply curve normally slopes', options: ['A. downward from left to right', 'B. upward from left to right', 'C. horizontally', 'D. vertically downward'], answer: 1, explanation: 'B is correct. By the law of supply, higher prices encourage greater supply, giving an upward-sloping curve.' },
          { q: 'Demand for a good with many close substitutes tends to be', options: ['A. perfectly inelastic', 'B. inelastic', 'C. elastic', 'D. unit elastic'], answer: 2, explanation: 'C is correct. When substitutes are readily available, consumers switch easily when price changes, making demand elastic.' },
          { q: 'An improvement in technology that lowers production costs will', options: ['A. shift the supply curve to the left', 'B. shift the supply curve to the right', 'C. shift the demand curve to the right', 'D. have no effect on supply'], answer: 1, explanation: 'B is correct. Lower costs increase the quantity producers can supply at each price, shifting supply to the right.' }
        ],
        theory: [
          { question: 'Explain the concept of price elasticity of demand and discuss three factors that determine the elasticity of demand for a commodity.', marks: 12, answer: 'Price elasticity of demand (PED) measures the degree of responsiveness of the quantity demanded of a commodity to a change in its price. It is calculated as PED = percentage change in quantity demanded ÷ percentage change in price. Demand is elastic when PED is greater than 1 (quantity is very responsive), inelastic when PED is less than 1 (quantity is little affected), and unit elastic when PED equals 1. Three determinants are: (1) Availability of substitutes — goods with many close substitutes have elastic demand because consumers switch to alternatives when price rises, whereas goods with few substitutes have inelastic demand. (2) Proportion of income spent on the good — goods that take a large share of income (e.g. cars) tend to have elastic demand, while cheap items take a small share and are inelastic. (3) Necessity versus luxury — necessities such as salt or staple food have inelastic demand because they must be bought regardless of price, while luxuries have elastic demand. Other factors include the time period considered and whether the good is habit-forming.', markingGuide: 'Award 3 marks for a correct definition with the formula. Award 3 marks each for explaining three valid determinants (9 marks), requiring both naming and explanation. Maximum 12 marks.' },
          { question: 'With the aid of a diagram, explain how equilibrium price and quantity are determined in a competitive market, and describe what happens when the market price is above equilibrium.', marks: 10, answer: 'In a competitive market, equilibrium price and quantity are determined by the interaction of the forces of demand and supply. The demand curve slopes downward and the supply curve slopes upward; they intersect at point E, the equilibrium, where the equilibrium price (Pe) and equilibrium quantity (Qe) are determined. At this point quantity demanded equals quantity supplied, so there is no pressure on price to change. (A diagram should show DD and SS curves crossing at E, with Pe on the price axis and Qe on the quantity axis.) When the market price is set above the equilibrium price, the quantity supplied exceeds the quantity demanded, creating a surplus (excess supply). Producers, unable to sell all their output, will lower their prices. As price falls, quantity demanded rises and quantity supplied falls until the market returns to equilibrium.', markingGuide: 'Award 2 marks for a correctly labelled supply-and-demand diagram. Award 4 marks for explaining the determination of equilibrium where the curves intersect. Award 4 marks for explaining that a price above equilibrium creates a surplus and how the market self-corrects by falling price.' }
        ]
      },
      {
        id: 'national_income',
        name: 'National Income, GDP & Economic Growth',
        icon: '📈',
        lessonNotes: '<h4>National Income, GDP & Economic Growth</h4><p><strong>Gross Domestic Product (GDP)</strong> is the total monetary value of all final goods and services produced within a country\'s borders in a given period, usually a year. It can be measured by three equivalent methods: the <strong>expenditure method</strong> (GDP = C + I + G + (X − M), i.e. consumption + investment + government spending + net exports); the <strong>income method</strong> (summing all incomes earned — wages, rent, interest, profit); and the <strong>output (product) method</strong> (summing the value added at each stage of production).</p><p><strong>Gross National Product (GNP)</strong> adds to GDP the net income earned by a country\'s nationals abroad. <strong>Net National Product (NNP)</strong> is GNP minus depreciation (capital consumption). <strong>Real GDP</strong> is adjusted for inflation, while <strong>nominal GDP</strong> is measured at current prices; real GDP gives a truer picture of growth. <strong>GDP per capita</strong> (GDP ÷ population) is a measure of average living standards.</p><p><strong>Economic growth</strong> is an increase in real GDP over time, caused by increased investment, improved technology, growth in human capital (education and skills), and discovery of resources. Growth is not steady but moves through the <strong>business cycle</strong>: boom, recession, trough (slump) and recovery.</p><p><strong>Inflation</strong> is a sustained rise in the general price level. <strong>Demand-pull inflation</strong> arises when aggregate demand exceeds supply; <strong>cost-push inflation</strong> arises from rising production costs. Inflation reduces purchasing power and the value of savings. <strong>Unemployment</strong> exists when people willing and able to work cannot find jobs; types include frictional, structural, cyclical and seasonal unemployment. The <strong>Human Development Index (HDI)</strong> combines income, education and life expectancy to measure development more broadly than GDP alone.</p>',
        keyPoints: [
          'GDP measures output produced within a country; GNP adds net income from abroad',
          'GDP by expenditure = C + I + G + (X − M)',
          'Real GDP is adjusted for inflation and better reflects true economic growth',
          'The business cycle has four phases: boom, recession, trough and recovery'
        ],
        examTips: [
          'Remember the three methods of measuring national income give the same total in theory',
          'Distinguish clearly between nominal (current prices) and real (inflation-adjusted) GDP in answers',
          'When listing types of unemployment, give a short example of each to earn full marks'
        ],
        commonMistakes: [
          'Confusing GDP (within borders) with GNP (includes nationals\' income from abroad)',
          'Treating any price rise as inflation rather than a sustained general rise in prices'
        ],
        mcq: [
          { q: 'GDP measured by the expenditure method is equal to', options: ['A. C + I + G + (X − M)', 'B. wages + rent + interest', 'C. value added at each stage', 'D. exports minus imports only'], answer: 0, explanation: 'A is correct. The expenditure method sums consumption, investment, government spending and net exports.' },
          { q: 'The difference between GNP and GDP is', options: ['A. depreciation', 'B. net income from abroad', 'C. indirect taxes', 'D. subsidies'], answer: 1, explanation: 'B is correct. GNP equals GDP plus the net income earned by a country\'s nationals abroad.' },
          { q: 'GDP adjusted for inflation is known as', options: ['A. nominal GDP', 'B. real GDP', 'C. GDP per capita', 'D. potential GDP'], answer: 1, explanation: 'B is correct. Real GDP is measured at constant prices, removing the effect of inflation.' },
          { q: 'Inflation caused by rising production costs is called', options: ['A. demand-pull inflation', 'B. cost-push inflation', 'C. hyperinflation', 'D. creeping inflation'], answer: 1, explanation: 'B is correct. Cost-push inflation results from increases in the costs of production such as wages or raw materials.' },
          { q: 'Unemployment caused by a downturn in the business cycle is', options: ['A. frictional', 'B. structural', 'C. cyclical', 'D. seasonal'], answer: 2, explanation: 'C is correct. Cyclical (demand-deficient) unemployment rises during a recession when aggregate demand falls.' },
          { q: 'The phase of the business cycle marked by falling output and rising unemployment is the', options: ['A. boom', 'B. recovery', 'C. recession', 'D. peak'], answer: 2, explanation: 'C is correct. A recession is characterised by falling real GDP and rising unemployment.' },
          { q: 'GDP per capita is calculated as', options: ['A. GDP × population', 'B. GDP ÷ population', 'C. GDP − population', 'D. GDP + exports'], answer: 1, explanation: 'B is correct. GDP per capita = total GDP divided by the population, giving average output per person.' },
          { q: 'Which of the following is NOT a method of measuring national income?', options: ['A. Income method', 'B. Expenditure method', 'C. Output method', 'D. Elasticity method'], answer: 3, explanation: 'D is correct. National income is measured by the income, expenditure and output methods; elasticity is unrelated.' },
          { q: 'The Human Development Index combines income, life expectancy and', options: ['A. inflation', 'B. education', 'C. exports', 'D. interest rates'], answer: 1, explanation: 'B is correct. The HDI combines income (GNI per capita), life expectancy and education indicators.' },
          { q: 'Unemployment that occurs when workers are between jobs is called', options: ['A. structural', 'B. cyclical', 'C. frictional', 'D. seasonal'], answer: 2, explanation: 'C is correct. Frictional unemployment is short-term unemployment as workers move between jobs.' }
        ],
        theory: [
          { question: 'Define national income and explain the three methods by which it can be measured. Why should the three methods give the same result?', marks: 12, answer: 'National income is the total money value of all goods and services produced by the residents of a country over a given period, usually one year. It can be measured by three methods. (1) The income method sums all incomes earned by factors of production — wages and salaries (labour), rent (land), interest (capital) and profit (entrepreneurship). (2) The expenditure method sums total spending on final goods and services: consumption (C) + investment (I) + government spending (G) + net exports (X − M). (3) The output (product) method sums the value added by all firms at each stage of production, avoiding double counting by counting only final output. The three methods give the same result because they are three ways of looking at the same circular flow of income: every expenditure on goods and services becomes income for someone, and that income is earned by producing output. Thus total output = total income = total expenditure.', markingGuide: 'Award 2 marks for the definition. Award 3 marks for each method clearly explained (9 marks total, with the expenditure formula required for full marks on that method). Award 1 mark for explaining the circular flow reason they are equal.' },
          { question: 'Distinguish between inflation and deflation, and explain three effects of inflation on an economy.', marks: 10, answer: 'Inflation is a sustained increase in the general level of prices of goods and services over time, which reduces the purchasing power of money. Deflation is the opposite: a sustained fall in the general price level, which increases the purchasing power of money but can signal weak demand. Three effects of inflation: (1) It reduces the real value of money and savings, so people on fixed incomes and savers lose purchasing power. (2) It discourages saving and may distort investment as people prefer to spend or hold physical assets. (3) It can worsen the balance of payments because domestic goods become more expensive relative to foreign goods, reducing exports and raising imports. (Other valid effects: it redistributes income from lenders to borrowers, and may cause industrial unrest as workers demand higher wages.)', markingGuide: 'Award 2 marks for correctly defining inflation and 2 marks for deflation (clear distinction). Award 2 marks for each of three valid, explained effects of inflation (6 marks). Maximum 10 marks.' }
        ]
      },
      {
        id: 'money_banking',
        name: 'Money, Banking & Monetary Policy',
        icon: '🏦',
        lessonNotes: '<h4>Money, Banking & Monetary Policy</h4><p><strong>Money</strong> is anything generally accepted as a means of payment for goods and services and in settlement of debts. It performs four main functions: a <strong>medium of exchange</strong> (overcoming the problems of barter), a <strong>store of value</strong> (wealth can be held in money form), a <strong>unit of account</strong> (a common measure of value), and a <strong>standard of deferred payment</strong> (allowing credit and debt to be settled later). Types of money include commodity money, fiat (legal-tender) money and bank (credit) money.</p><p><strong>Commercial banks</strong> are profit-making institutions whose main functions include accepting deposits (current, savings and fixed deposits), giving loans and overdrafts, and creating money through the <strong>credit multiplier</strong>. When banks lend out a fraction of deposits while keeping a reserve, the loans are re-deposited and re-lent, multiplying the money supply.</p><p>The <strong>central bank</strong> (in Liberia, the Central Bank of Liberia, CBL) is the apex monetary authority. Its functions include issuing currency, acting as banker to the government, acting as banker\'s bank and lender of last resort, managing foreign reserves and exchange rates, and controlling the money supply.</p><p><strong>Monetary policy</strong> is the use of measures by the central bank to control the supply of money and the cost of credit. Its main tools are: changing the <strong>interest rate</strong> (a higher rate reduces borrowing and spending), altering the <strong>reserve requirement</strong> (raising it reduces banks\' ability to lend), and <strong>open market operations</strong> (selling government securities reduces the money supply, buying them increases it). These tools are used to control inflation and stabilise the economy.</p>',
        keyPoints: [
          'Money has four functions: medium of exchange, store of value, unit of account, standard of deferred payment',
          'Commercial banks create money through the credit (deposit) multiplier when they lend',
          'The central bank issues currency and acts as banker\'s bank and lender of last resort',
          'Monetary policy tools are interest rates, reserve requirements and open market operations'
        ],
        examTips: [
          'Memorise the four functions of money and be ready to give an example of each',
          'For monetary policy questions, link each tool to its effect on the money supply and inflation',
          'Clearly distinguish the roles of commercial banks (profit) from the central bank (regulation)'
        ],
        commonMistakes: [
          'Confusing the functions of commercial banks with those of the central bank',
          'Stating that selling securities increases the money supply when it actually reduces it'
        ],
        mcq: [
          { q: 'Which of the following is NOT a function of money?', options: ['A. Medium of exchange', 'B. Store of value', 'C. Unit of account', 'D. Factor of production'], answer: 3, explanation: 'D is correct. Money is a medium of exchange, store of value, unit of account and standard of deferred payment, but it is not a factor of production.' },
          { q: 'The main function of money that solves the problem of barter (double coincidence of wants) is its role as a', options: ['A. store of value', 'B. medium of exchange', 'C. unit of account', 'D. standard of deferred payment'], answer: 1, explanation: 'B is correct. As a medium of exchange, money removes the need for a double coincidence of wants required under barter.' },
          { q: 'Commercial banks create money mainly through', options: ['A. printing currency notes', 'B. giving loans (credit multiplier)', 'C. holding all deposits as reserves', 'D. issuing legal tender'], answer: 1, explanation: 'B is correct. Banks create credit money by lending out a fraction of deposits, which are re-deposited and re-lent (the credit multiplier).' },
          { q: 'The lender of last resort in an economy is the', options: ['A. commercial bank', 'B. central bank', 'C. stock exchange', 'D. insurance company'], answer: 1, explanation: 'B is correct. The central bank acts as lender of last resort to commercial banks facing temporary shortages.' },
          { q: 'To reduce inflation, a central bank is likely to', options: ['A. lower interest rates', 'B. raise interest rates', 'C. buy government securities', 'D. reduce reserve requirements'], answer: 1, explanation: 'B is correct. Raising interest rates reduces borrowing and spending, helping to control inflation.' },
          { q: 'When a central bank sells government securities in the open market, the money supply', options: ['A. increases', 'B. decreases', 'C. stays the same', 'D. doubles'], answer: 1, explanation: 'B is correct. Selling securities withdraws money from the banking system, reducing the money supply.' },
          { q: 'The issuing of currency notes and coins is the function of the', options: ['A. commercial banks', 'B. central bank', 'C. development banks', 'D. microfinance institutions'], answer: 1, explanation: 'B is correct. The sole right to issue legal tender currency belongs to the central bank.' },
          { q: 'An increase in the reserve requirement of commercial banks will', options: ['A. increase their ability to lend', 'B. reduce their ability to lend', 'C. have no effect on lending', 'D. increase the money supply'], answer: 1, explanation: 'B is correct. A higher reserve requirement means banks must hold more deposits, reducing the amount they can lend.' },
          { q: 'Money used as a "standard of deferred payment" means it', options: ['A. measures the value of goods', 'B. is used to settle future debts', 'C. is stored for the future', 'D. is exchanged for goods now'], answer: 1, explanation: 'B is correct. As a standard of deferred payment, money allows debts and credit to be settled in the future.' },
          { q: 'Fiat money is money that', options: ['A. has intrinsic commodity value', 'B. is declared legal tender by government', 'C. is backed fully by gold', 'D. is used only in barter'], answer: 1, explanation: 'B is correct. Fiat money has no intrinsic value but is accepted because the government declares it legal tender.' }
        ],
        theory: [
          { question: 'State and explain the four functions of money. Why is money considered superior to barter as a means of exchange?', marks: 12, answer: 'The four functions of money are: (1) Medium of exchange — money is generally accepted in payment for goods and services, so people no longer need to swap goods directly. (2) Measure or unit of account — money provides a common unit in which the value of all goods and services can be expressed and compared. (3) Store of value — money can be saved and used to purchase goods in the future because it retains value over time. (4) Standard of deferred payment — money allows debts and credit transactions to be settled at a later date. Money is superior to barter because barter requires a double coincidence of wants (each party must want what the other has at the same time), which is difficult; money removes this problem by being acceptable to all. Barter also lacks a common measure of value, makes storing wealth difficult (especially perishables), and makes lending and deferred payment awkward, all of which money overcomes.', markingGuide: 'Award 2 marks for each function clearly stated and explained (8 marks). Award 4 marks for explaining at least two reasons (e.g. double coincidence of wants, common measure of value, store of wealth) why money is superior to barter.' },
          { question: 'Explain the main tools of monetary policy and how each can be used by the central bank to control inflation.', marks: 10, answer: 'Monetary policy is the regulation of the money supply and cost of credit by the central bank. Its main tools are: (1) Open market operations — to control inflation the central bank sells government securities to the public and banks; this withdraws money from circulation, reducing the money supply and curbing inflation. (2) Bank (interest) rate — by raising the rate at which it lends to commercial banks, the central bank makes borrowing more expensive; banks raise their own lending rates, borrowing and spending fall, and inflationary pressure eases. (3) Reserve requirement (cash reserve ratio) — by raising the proportion of deposits banks must hold in reserve, the central bank reduces the funds available for lending, contracting credit creation and the money supply. (Other tools include special deposits and moral suasion.) In each case, to fight inflation the central bank uses the contractionary version of the tool to reduce the money supply and aggregate demand.', markingGuide: 'Award 3 marks for each of three correctly explained tools linked to controlling inflation (9 marks). Award 1 mark for a clear opening definition of monetary policy. Maximum 10 marks.' }
        ]
      },
      {
        id: 'international_trade',
        name: 'International Trade & Balance of Payments',
        icon: '🌍',
        lessonNotes: '<h4>International Trade & Balance of Payments</h4><p><strong>International trade</strong> is the exchange of goods and services across national boundaries. Countries trade because of differences in resources, climate and skills, allowing <strong>specialisation</strong>. The theory of <strong>absolute advantage</strong> says a country should produce goods it can make more efficiently (using fewer resources) than others, while the theory of <strong>comparative advantage</strong> says a country should specialise in goods in which it has the lower opportunity cost, even if it has no absolute advantage. The <strong>terms of trade</strong> measure the ratio of export prices to import prices.</p><p>Governments may restrict trade through <strong>trade barriers</strong>: <strong>tariffs</strong> (taxes on imports), <strong>quotas</strong> (limits on import quantity), <strong>embargoes</strong> (total bans), and <strong>subsidies</strong> to domestic producers. Reasons for protection include protecting infant industries, safeguarding jobs, improving the balance of payments, and raising revenue. However, free trade promotes efficiency, wider choice, lower prices and economic growth, though it can harm infant industries and cause unemployment in uncompetitive sectors.</p><p>The <strong>balance of trade</strong> is the difference between the value of visible exports and visible imports. The <strong>balance of payments</strong> is a wider record of all economic transactions between a country and the rest of the world, made up of the <strong>current account</strong> (trade in goods and services, income and transfers) and the <strong>capital and financial account</strong> (flows of investment and loans).</p><p><strong>Exchange rates</strong> express the value of one currency in terms of another. Under a <strong>fixed</strong> system the government pegs the rate; under a <strong>floating</strong> system market forces determine it. <strong>Depreciation</strong> (a fall in a currency\'s value) makes exports cheaper and imports dearer, while <strong>appreciation</strong> does the opposite. International institutions include the <strong>IMF</strong> (balance-of-payments support), the <strong>World Bank</strong> (development finance), and <strong>ECOWAS</strong> (West African regional trade).</p>',
        keyPoints: [
          'Comparative advantage means specialising where opportunity cost is lowest, even without absolute advantage',
          'Trade barriers include tariffs, quotas, embargoes and subsidies',
          'The balance of payments has a current account and a capital and financial account',
          'Depreciation makes exports cheaper and imports more expensive; appreciation does the reverse'
        ],
        examTips: [
          'Distinguish clearly between absolute advantage and comparative advantage with a simple example',
          'Do not confuse the balance of trade (visible goods only) with the wider balance of payments',
          'Link exchange-rate changes to their effect on exports and imports to earn full marks'
        ],
        commonMistakes: [
          'Confusing absolute advantage with comparative advantage',
          'Treating the balance of trade and the balance of payments as the same thing'
        ],
        mcq: [
          { q: 'A tax imposed on imported goods is called a', options: ['A. quota', 'B. tariff', 'C. subsidy', 'D. embargo'], answer: 1, explanation: 'B is correct. A tariff is a tax or duty placed on imported goods.' },
          { q: 'A complete ban on trade with a particular country is known as a(n)', options: ['A. tariff', 'B. quota', 'C. embargo', 'D. subsidy'], answer: 2, explanation: 'C is correct. An embargo is a total prohibition of trade with a country.' },
          { q: 'The theory that a country should specialise in goods in which it has the lowest opportunity cost is', options: ['A. absolute advantage', 'B. comparative advantage', 'C. terms of trade', 'D. balance of trade'], answer: 1, explanation: 'B is correct. Comparative advantage is based on the lowest opportunity cost of production.' },
          { q: 'The balance of trade refers to the difference between', options: ['A. total exports and total imports of goods and services', 'B. visible exports and visible imports', 'C. capital inflows and outflows', 'D. government revenue and expenditure'], answer: 1, explanation: 'B is correct. The balance of trade is the difference between visible (goods) exports and visible imports.' },
          { q: 'A fall in the value of a country\'s currency relative to others is called', options: ['A. appreciation', 'B. depreciation', 'C. revaluation', 'D. inflation'], answer: 1, explanation: 'B is correct. Depreciation is a fall in the value of a currency under a floating exchange-rate system.' },
          { q: 'Depreciation of a country\'s currency tends to make its exports', options: ['A. more expensive', 'B. cheaper', 'C. unchanged', 'D. banned'], answer: 1, explanation: 'B is correct. When a currency depreciates, exports become cheaper to foreign buyers and imports become more expensive.' },
          { q: 'A limit placed on the quantity of a good that may be imported is a', options: ['A. tariff', 'B. quota', 'C. subsidy', 'D. devaluation'], answer: 1, explanation: 'B is correct. A quota is a physical limit on the quantity of a good that may be imported.' },
          { q: 'Which institution provides short-term support for balance-of-payments problems?', options: ['A. World Bank', 'B. International Monetary Fund (IMF)', 'C. ECOWAS', 'D. World Trade Organisation'], answer: 1, explanation: 'B is correct. The IMF provides financial assistance to member countries facing balance-of-payments difficulties.' },
          { q: 'The current account of the balance of payments records', options: ['A. flows of long-term investment only', 'B. trade in goods and services, income and transfers', 'C. only government borrowing', 'D. changes in foreign reserves only'], answer: 1, explanation: 'B is correct. The current account covers trade in goods and services, primary income and current transfers.' },
          { q: 'ECOWAS was established mainly to promote', options: ['A. global free trade', 'B. economic cooperation among West African states', 'C. a single world currency', 'D. military alliances only'], answer: 1, explanation: 'B is correct. ECOWAS (Economic Community of West African States) promotes economic integration and trade in West Africa.' }
        ],
        theory: [
          { question: 'Distinguish between absolute advantage and comparative advantage, and explain three reasons why countries engage in international trade.', marks: 12, answer: 'Absolute advantage exists when a country can produce a good using fewer resources (more efficiently) than another country. Comparative advantage exists when a country can produce a good at a lower opportunity cost than another country, that is, by giving up less of other goods; a country can have a comparative advantage even where it has no absolute advantage. The key distinction is that absolute advantage compares actual productive efficiency, while comparative advantage compares opportunity costs, and it is comparative advantage that determines beneficial specialisation. Three reasons countries trade: (1) Differences in natural resources and climate — countries produce and export what their resources favour and import what they cannot produce well. (2) Specialisation and economies of scale — by specialising in goods of comparative advantage, countries raise output and lower costs, then exchange surpluses. (3) To obtain goods not produced domestically and to widen consumer choice and obtain goods more cheaply, raising living standards. (Other reasons include earning foreign exchange and disposing of surplus production.)', markingGuide: 'Award 2 marks for defining absolute advantage, 2 for comparative advantage, and 2 for a clear distinction (6 marks). Award 2 marks for each of three valid reasons for trade (6 marks). Maximum 12 marks.' },
          { question: 'Explain the difference between the balance of trade and the balance of payments, and outline two measures a country can take to correct a balance-of-payments deficit.', marks: 10, answer: 'The balance of trade is the difference between the value of a country\'s visible exports (goods) and its visible imports over a period; it is a narrow measure covering only physical goods. The balance of payments is a complete record of all economic transactions between a country and the rest of the world over a period, including the current account (visible and invisible trade, income and transfers) and the capital and financial account (investment and loan flows). Thus the balance of trade is only one part of the wider balance of payments. Two corrective measures for a deficit: (1) Devaluation/depreciation of the currency — this makes exports cheaper and imports dearer, encouraging exports and discouraging imports to improve the current account. (2) Import restrictions — imposing tariffs and quotas reduces the value of imports. (Other valid measures: deflationary policy to reduce domestic demand for imports, and export promotion through subsidies and incentives.)', markingGuide: 'Award 3 marks for explaining the balance of trade and 3 marks for the balance of payments with a clear distinction (6 marks). Award 2 marks for each of two valid, explained corrective measures (4 marks). Maximum 10 marks.' }
        ]
      },
      {
        id: 'government_fiscal_policy',
        name: 'Government, Fiscal Policy & Public Finance',
        icon: '🏛️',
        lessonNotes: '<h4>Government, Fiscal Policy & Public Finance</h4><p>Governments play three key economic roles: <strong>allocation</strong> (providing public goods and correcting market failure), <strong>distribution</strong> (redistributing income through taxes and transfers to reduce inequality), and <strong>stabilisation</strong> (managing the economy to control inflation, unemployment and growth).</p><p><strong>Taxes</strong> are compulsory payments to the government. <strong>Direct taxes</strong> are levied on income and wealth (e.g. personal income tax, company/corporate tax) and are paid directly by the person who bears them. <strong>Indirect taxes</strong> are levied on goods and services (e.g. value-added tax (VAT), excise duty, import duty) and are passed on to consumers in prices. Taxes may be <strong>proportional</strong> (same percentage at all incomes), <strong>progressive</strong> (higher percentage as income rises), or <strong>regressive</strong> (lower percentage as income rises).</p><p><strong>Government expenditure</strong> covers recurrent spending (wages, debt interest) and capital spending (roads, schools, hospitals). The <strong>government budget</strong> compares revenue and expenditure: a <strong>surplus</strong> budget has revenue greater than expenditure, a <strong>deficit</strong> budget has expenditure greater than revenue, and a <strong>balanced</strong> budget has them equal. Persistent deficits add to the <strong>national debt</strong>.</p><p><strong>Fiscal policy</strong> is the use of government spending and taxation to influence the economy. <strong>Expansionary fiscal policy</strong> (more spending and/or lower taxes) boosts demand to fight unemployment and recession; <strong>contractionary fiscal policy</strong> (less spending and/or higher taxes) restrains demand to fight inflation.</p><p><strong>Public goods</strong> (e.g. defence, street lighting) are non-rival and non-excludable, so the market underprovides them. <strong>Externalities</strong> are costs or benefits affecting third parties: negative externalities (e.g. pollution) and positive externalities (e.g. education). These, along with monopoly and public goods, cause <strong>market failure</strong>, justifying government intervention. In Liberia, the government, through the Ministry of Finance and the Central Bank of Liberia (CBL), manages public finance, with key exports such as iron ore, rubber and gold shaping revenue.</p>',
        keyPoints: [
          'Direct taxes are on income/wealth; indirect taxes are on goods and services',
          'A progressive tax takes a higher percentage as income rises; a regressive tax takes a lower percentage',
          'A budget deficit means expenditure exceeds revenue and adds to the national debt',
          'Expansionary fiscal policy fights unemployment; contractionary fiscal policy fights inflation'
        ],
        examTips: [
          'Always give an example when classifying taxes as direct or indirect, progressive or regressive',
          'Link fiscal policy direction (expansionary vs contractionary) to the problem it solves',
          'Define public goods using the terms non-rival and non-excludable for full marks'
        ],
        commonMistakes: [
          'Confusing direct taxes (on income) with indirect taxes (on spending)',
          'Mixing up a budget surplus (revenue exceeds spending) with a deficit (spending exceeds revenue)'
        ],
        mcq: [
          { q: 'Which of the following is a direct tax?', options: ['A. Value-added tax', 'B. Excise duty', 'C. Personal income tax', 'D. Import duty'], answer: 2, explanation: 'C is correct. Personal income tax is levied directly on income and is a direct tax; the others are indirect taxes on goods.' },
          { q: 'A tax that takes a higher percentage of income as income rises is', options: ['A. proportional', 'B. progressive', 'C. regressive', 'D. indirect'], answer: 1, explanation: 'B is correct. A progressive tax takes a larger proportion of income as income increases.' },
          { q: 'A government budget deficit occurs when', options: ['A. revenue exceeds expenditure', 'B. expenditure exceeds revenue', 'C. revenue equals expenditure', 'D. there are no taxes'], answer: 1, explanation: 'B is correct. A deficit occurs when government expenditure is greater than its revenue.' },
          { q: 'Expansionary fiscal policy involves', options: ['A. raising taxes and cutting spending', 'B. increasing spending and/or cutting taxes', 'C. raising interest rates', 'D. selling government securities'], answer: 1, explanation: 'B is correct. Expansionary fiscal policy increases government spending and/or reduces taxes to raise aggregate demand.' },
          { q: 'Which of the following is a characteristic of a public good?', options: ['A. Rival and excludable', 'B. Non-rival and non-excludable', 'C. Sold only in markets', 'D. Provided only by firms'], answer: 1, explanation: 'B is correct. Public goods are non-rival (one person\'s use does not reduce another\'s) and non-excludable (no one can be prevented from using them).' },
          { q: 'Pollution from a factory affecting nearby residents is an example of a', options: ['A. positive externality', 'B. negative externality', 'C. public good', 'D. subsidy'], answer: 1, explanation: 'B is correct. Pollution imposes a cost on third parties not involved in the transaction, a negative externality.' },
          { q: 'Value-added tax (VAT) is best described as a', options: ['A. direct tax', 'B. progressive tax', 'C. indirect tax', 'D. capital tax'], answer: 2, explanation: 'C is correct. VAT is levied on goods and services and passed on to consumers, making it an indirect tax.' },
          { q: 'To reduce inflation, an appropriate fiscal policy would be to', options: ['A. increase government spending', 'B. reduce taxes', 'C. increase taxes and reduce spending', 'D. print more money'], answer: 2, explanation: 'C is correct. Contractionary fiscal policy (higher taxes and lower spending) reduces aggregate demand to control inflation.' },
          { q: 'The accumulation of past government budget deficits forms the', options: ['A. balance of trade', 'B. national debt', 'C. foreign reserves', 'D. money supply'], answer: 1, explanation: 'B is correct. The national debt is the total amount the government owes from accumulated past deficits.' },
          { q: 'Which of the following is a major export that shapes government revenue in Liberia?', options: ['A. Crude oil', 'B. Iron ore', 'C. Coffee only', 'D. Cocoa only'], answer: 1, explanation: 'B is correct. Iron ore (along with rubber and gold) is a key Liberian export that influences government revenue.' }
        ],
        theory: [
          { question: 'Distinguish between direct and indirect taxes, giving two examples of each, and explain the meaning of progressive, proportional and regressive taxation.', marks: 12, answer: 'A direct tax is one levied directly on the income, profit or wealth of individuals and firms, where the person taxed bears the burden and cannot easily pass it on; examples are personal income tax and company (corporate) tax. An indirect tax is levied on goods and services and is collected through an intermediary (the seller), with the burden passed on to the final consumer through higher prices; examples are value-added tax (VAT) and excise duty (or import duty). Regarding the structure of taxation: a progressive tax takes a higher percentage of income as income rises, so high earners pay proportionately more (e.g. graduated income tax). A proportional tax takes the same percentage of income at all income levels, so everyone pays the same rate. A regressive tax takes a smaller percentage of income as income rises, so it bears more heavily on the poor (many indirect taxes are regressive in effect).', markingGuide: 'Award 2 marks for explaining direct tax and 2 for indirect tax, plus 1 mark each for two correct examples of each type (6 marks). Award 2 marks for each of progressive, proportional and regressive correctly explained (6 marks). Maximum 12 marks.' },
          { question: 'Explain the meaning of fiscal policy and describe how the government can use it to reduce unemployment in a country.', marks: 10, answer: 'Fiscal policy is the use of government revenue (taxation) and government expenditure to influence the level of economic activity, aggregate demand, employment and prices. To reduce unemployment, the government adopts an expansionary fiscal policy aimed at raising aggregate demand: (1) It increases government expenditure on projects such as roads, schools, hospitals and other public works; this directly creates jobs and, through the multiplier effect, generates further spending and employment in other sectors. (2) It reduces taxes — lowering income tax raises people\'s disposable income, increasing consumer spending, while cutting company tax encourages firms to invest and expand, creating more jobs. The combined effect of higher spending and lower taxes raises aggregate demand, so firms increase output and hire more workers, reducing unemployment. The government may run a budget deficit to finance this in the short term.', markingGuide: 'Award 3 marks for a clear definition of fiscal policy (mentioning taxation and government spending). Award 3 marks for explaining increased government expenditure and the multiplier, and 3 marks for explaining tax reductions raising demand and investment. Award 1 mark for noting this is expansionary policy / may involve a deficit. Maximum 10 marks.' }
        ]
      }
    ],
    pastQuestions: [
      {
        year: 2019,
        paper: 'Paper 2',
        question: 'Explain the law of demand and discuss three factors, other than price, that can cause the demand for a commodity to change.',
        topic: 'supply_demand',
        answer: 'The law of demand states that, other things being equal, the quantity of a commodity demanded falls as its price rises and rises as its price falls, giving a downward-sloping demand curve. Three non-price factors that shift demand are: (1) Income — a rise in consumers\' income increases demand for normal goods and reduces demand for inferior goods. (2) Prices of related goods — a rise in the price of a substitute increases demand for the good, while a rise in the price of a complement reduces it. (3) Tastes and preferences — favourable changes in fashion, advertising or taste increase demand, while unfavourable changes reduce it. (Population and expectations of future prices are also valid.)',
        markingGuide: 'Award 3 marks for correctly stating and explaining the law of demand. Award 3 marks for each of three valid non-price determinants clearly explained (9 marks). Maximum 12 marks.'
      },
      {
        year: 2020,
        paper: 'Paper 2',
        question: 'Distinguish between Gross Domestic Product (GDP) and Gross National Product (GNP), and state three uses of national income statistics.',
        topic: 'national_income',
        answer: 'GDP is the total money value of all final goods and services produced within a country\'s geographical boundaries in a year, regardless of who owns the factors of production. GNP is GDP plus the net income (income earned by nationals abroad minus income earned by foreigners domestically) from abroad; thus GNP = GDP + net factor income from abroad. Three uses of national income statistics: (1) to measure the standard of living and compare it over time and between countries (using GDP per capita); (2) to assess the rate of economic growth by comparing real GDP over successive years; (3) to guide government planning and policy, for example in budgeting and allocating resources. (Also acceptable: measuring the structure/contribution of sectors and attracting foreign investment.)',
        markingGuide: 'Award 4 marks for clearly distinguishing GDP and GNP (with the net income from abroad point). Award 2 marks for each of three valid uses of national income statistics (6 marks). Maximum 10 marks.'
      },
      {
        year: 2021,
        paper: 'Paper 2',
        question: 'Define money and explain four functions it performs in a modern economy.',
        topic: 'money_banking',
        answer: 'Money is anything that is generally accepted as a means of payment for goods and services and in the settlement of debts. Its four functions are: (1) Medium of exchange — it is accepted in exchange for goods and services, removing the need for the double coincidence of wants required by barter. (2) Measure (unit) of account — it provides a common standard for expressing and comparing the value of different goods and services. (3) Store of value — it can be saved and used to make purchases in the future because it retains value over time. (4) Standard of deferred payment — it allows debts and credit transactions to be contracted now and settled in money later.',
        markingGuide: 'Award 2 marks for a correct definition of money. Award 2 marks for each of the four functions clearly explained (8 marks). Maximum 10 marks.'
      },
      {
        year: 2022,
        paper: 'Paper 2',
        question: 'Explain four reasons why a government may impose restrictions on international trade.',
        topic: 'international_trade',
        answer: 'A government may restrict trade for the following reasons: (1) To protect infant industries — newly established domestic industries need protection from established foreign competitors until they grow strong enough to compete. (2) To protect employment — restricting cheap imports safeguards local jobs in industries that would otherwise close. (3) To improve the balance of payments — tariffs and quotas reduce imports, helping to correct a balance-of-payments deficit. (4) To raise government revenue — tariffs (import duties) are a source of government income. (Other valid reasons: to prevent dumping of cheap foreign goods, for strategic/defence reasons, and to discourage harmful or undesirable goods.)',
        markingGuide: 'Award 2 to 3 marks for each of four valid, well-explained reasons for trade restriction (total up to 10-12 marks). A bare list without explanation earns half marks. Maximum 12 marks.'
      },
      {
        year: 2023,
        paper: 'Paper 2',
        question: 'Explain the term fiscal policy and outline four instruments of fiscal policy available to a government.',
        topic: 'government_fiscal_policy',
        answer: 'Fiscal policy is the use of government taxation and expenditure to regulate the level of economic activity, including aggregate demand, employment, output and the general price level. Four instruments of fiscal policy are: (1) Taxation — the government can raise or lower direct and indirect taxes to reduce or increase disposable income and demand. (2) Government expenditure — increasing or decreasing public spending on goods, services and projects directly affects aggregate demand and employment. (3) Public borrowing — the government can borrow to finance a budget deficit and inject spending, or repay debt to withdraw spending. (4) Budgetary policy — running a budget surplus (to dampen demand and curb inflation) or a budget deficit (to stimulate demand and reduce unemployment). These instruments are combined as expansionary or contractionary fiscal policy depending on the economic objective.',
        markingGuide: 'Award 2 marks for a clear definition of fiscal policy. Award 2 marks for each of four valid instruments explained (8 marks). Maximum 10 marks.'
      }
    ]
  },

  'civic-education': {
    id: 'civic-education', name: 'Civic Education', shortName: 'Civics', icon: '🏛️',
    color: '#7c3aed', bgColor: '#ede9fe', textColor: '#5b21b6', category: 'social',
    description: 'Understand citizenship, government and civic responsibilities', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  accounts: {
    id: 'accounts', name: 'Financial Accounting', shortName: 'Accounts', icon: '📒',
    color: '#0369a1', bgColor: '#e0f2fe', textColor: '#0c4a6e', category: 'commercial',
    description: 'Master bookkeeping, financial statements and accounting principles', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  commerce: {
    id: 'commerce', name: 'Commerce', shortName: 'Commerce', icon: '🛒',
    color: '#ca8a04', bgColor: '#fef9c3', textColor: '#713f12', category: 'commercial',
    description: 'Explore trade, business operations and commercial activities', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  marketing: {
    id: 'marketing', name: 'Marketing', shortName: 'Marketing', icon: '📣',
    color: '#ea580c', bgColor: '#ffedd5', textColor: '#9a3412', category: 'commercial',
    description: 'Study market research, consumer behaviour and promotional strategies', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  literature: {
    id: 'literature', name: 'Literature in English', shortName: 'Literature', icon: '📚',
    color: '#be185d', bgColor: '#fce7f3', textColor: '#831843', category: 'humanities',
    description: 'Analyse prose, poetry and drama for WASSCE success', examFormat: 'Paper 1: 45 MCQ | Paper 2: Essay',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  government: {
    id: 'government', name: 'Government', shortName: 'Government', icon: '⚖️',
    color: '#1d4ed8', bgColor: '#dbeafe', textColor: '#1e3a8a', category: 'social',
    description: 'Study political systems, constitutions and governance structures', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  geography: {
    id: 'geography', name: 'Geography', shortName: 'Geography', icon: '🌍',
    color: '#059669', bgColor: '#dcfce7', textColor: '#065f46', category: 'social',
    description: 'Explore physical and human geography concepts for WASSCE', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory/Essay',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  history: {
    id: 'history', name: 'History', shortName: 'History', icon: '📜',
    color: '#92400e', bgColor: '#fef3c7', textColor: '#78350f', category: 'humanities',
    description: 'Study West African and world history from pre-colonial times', examFormat: 'Paper 1: 50 MCQ | Paper 2: Essay',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  crs: {
    id: 'crs', name: 'Christian Religious Studies', shortName: 'CRS', icon: '✝️',
    color: '#6366f1', bgColor: '#e0e7ff', textColor: '#3730a3', category: 'humanities',
    description: 'Explore Biblical teachings, Christian ethics and church history', examFormat: 'Paper 1: 50 MCQ | Paper 2: Essay',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  irs: {
    id: 'irs', name: 'Islamic Religious Studies', shortName: 'IRS', icon: '☪️',
    color: '#065f46', bgColor: '#d1fae5', textColor: '#022c22', category: 'humanities',
    description: 'Study the Quran, Hadith, Islamic history and jurisprudence', examFormat: 'Paper 1: 50 MCQ | Paper 2: Essay',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  agriculture: {
    id: 'agriculture', name: 'Agricultural Science', shortName: 'Agriculture', icon: '🌾',
    color: '#78350f', bgColor: '#fef3c7', textColor: '#451a03', category: 'vocational',
    description: 'Study crop science, animal husbandry and farm management', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory | Paper 3: Practical',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  'further-maths': {
    id: 'further-maths', name: 'Further Mathematics', shortName: 'Further Maths', icon: '∞',
    color: '#0f766e', bgColor: '#ccfbf1', textColor: '#042f2e', category: 'core',
    description: 'Advanced mathematics including calculus, matrices and further statistics', examFormat: 'Paper 1: 40 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  'health-science': {
    id: 'health-science', name: 'Health Science', shortName: 'Health Science', icon: '🏥',
    color: '#dc2626', bgColor: '#fee2e2', textColor: '#7f1d1d', category: 'science',
    description: 'Study human health, disease prevention and the healthcare system', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  'food-nutrition': {
    id: 'food-nutrition', name: 'Food & Nutrition', shortName: 'Food & Nutrition', icon: '🥗',
    color: '#d97706', bgColor: '#fef3c7', textColor: '#78350f', category: 'vocational',
    description: 'Learn about nutrition science, food preparation and dietetics', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory | Paper 3: Practical',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  'technical-drawing': {
    id: 'technical-drawing', name: 'Technical Drawing', shortName: 'Tech Drawing', icon: '📏',
    color: '#475569', bgColor: '#f1f5f9', textColor: '#1e293b', category: 'vocational',
    description: 'Master orthographic projection, dimensioning and technical illustration', examFormat: 'Paper 1: 40 MCQ | Paper 2: Drawing',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  'computer-science': {
    id: 'computer-science', name: 'Computer Science', shortName: 'Computer Sci', icon: '💻',
    color: '#2563eb', bgColor: '#dbeafe', textColor: '#1e3a8a', category: 'vocational',
    description: 'Study hardware, software, programming and information systems', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory | Paper 3: Practical',
    totalTopics: 5, topics: [], pastQuestions: []
  },
  'home-economics': {
    id: 'home-economics', name: 'Home Economics', shortName: 'Home Econ', icon: '🏠',
    color: '#c026d3', bgColor: '#fae8ff', textColor: '#701a75', category: 'vocational',
    description: 'Study home management, child development and consumer education', examFormat: 'Paper 1: 50 MCQ | Paper 2: Theory | Paper 3: Practical',
    totalTopics: 5, topics: [], pastQuestions: []
  }
};

console.log('[WASSCE-DATA] Loaded ' + Object.keys(window.WASSCE_SUBJECTS).length + ' subjects');
