import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadinessCalculator from '@/components/ReadinessCalculator';

export default function ReadinessCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <ReadinessCalculator />
      </main>
      <Footer />
    </div>
  );
}