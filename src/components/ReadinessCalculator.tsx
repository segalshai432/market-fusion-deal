import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Phone, Mail, ExternalLink } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: { value: number; label: string }[];
}

interface Professional {
  name: string;
  specialty: string;
  phone: string;
  email: string;
  description: string;
}

const questions: Question[] = [
  {
    id: 'financials',
    question: 'How organized are your financial records?',
    options: [
      { value: 10, label: 'Comprehensive records, audited statements, 3+ years of data' },
      { value: 7, label: 'Good records, some documentation, 2 years of data' },
      { value: 4, label: 'Basic records, limited documentation' },
      { value: 1, label: 'Poor or missing financial records' }
    ]
  },
  {
    id: 'independence',
    question: 'Can your business operate without your daily involvement?',
    options: [
      { value: 10, label: 'Completely - strong management team runs everything' },
      { value: 7, label: 'Mostly - can be away for weeks with minimal issues' },
      { value: 4, label: 'Partially - need to check in daily but can delegate' },
      { value: 1, label: 'Not at all - business depends entirely on me' }
    ]
  },
  {
    id: 'profitability',
    question: 'What is your business profitability trend?',
    options: [
      { value: 10, label: 'Consistently growing profits for 3+ years' },
      { value: 7, label: 'Stable profits with occasional growth' },
      { value: 4, label: 'Break-even or minimal profits' },
      { value: 1, label: 'Declining or inconsistent profits' }
    ]
  },
  {
    id: 'market',
    question: 'How is your market position?',
    options: [
      { value: 10, label: 'Market leader with strong competitive advantages' },
      { value: 7, label: 'Strong position with loyal customer base' },
      { value: 4, label: 'Decent position but facing competition' },
      { value: 1, label: 'Struggling against competitors' }
    ]
  },
  {
    id: 'documentation',
    question: 'Are your business processes documented?',
    options: [
      { value: 10, label: 'Comprehensive manuals, SOPs, and training materials' },
      { value: 7, label: 'Key processes documented, some training materials' },
      { value: 4, label: 'Basic documentation, mostly informal processes' },
      { value: 1, label: 'Little to no documentation' }
    ]
  }
];

const professionals: Professional[] = [
  {
    name: 'SA Business Accounting Solutions',
    specialty: 'Financial Record Organization',
    phone: '+27 11 234 5678',
    email: 'info@sabusinessaccounting.co.za',
    description: 'Specializes in organizing financial records and preparing businesses for sale'
  },
  {
    name: 'Cape Town Business Consultants',
    specialty: 'Operational Independence',
    phone: '+27 21 456 7890',
    email: 'consultants@ctbusiness.co.za',
    description: 'Helps businesses build management systems and reduce owner dependency'
  },
  {
    name: 'Johannesburg Growth Partners',
    specialty: 'Profitability Optimization',
    phone: '+27 11 789 0123',
    email: 'growth@jhbpartners.co.za',
    description: 'Strategic consultants focused on improving business profitability and market position'
  },
  {
    name: 'Durban Process Excellence',
    specialty: 'Business Documentation',
    phone: '+27 31 345 6789',
    email: 'excellence@durbanprocess.co.za',
    description: 'Creates comprehensive business process documentation and training materials'
  },
  {
    name: 'SA Business Valuations',
    specialty: 'Market Positioning & Valuation',
    phone: '+27 11 567 8901',
    email: 'valuations@sabusiness.co.za',
    description: 'Expert business valuators and market positioning specialists'
  }
];

export default function ReadinessCalculator() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 10;
    return Math.round((totalScore / maxScore) * 100);
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
    }
  };

  const score = calculateScore();
  const isComplete = Object.keys(answers).length === questions.length;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-accent';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return {
        title: 'Excellent! Your business is ready for sale',
        message: 'Your business shows strong readiness indicators. You\'re well-positioned for a successful sale.',
        showProfessionals: false
      };
    } else if (score >= 60) {
      return {
        title: 'Good foundation, but room for improvement',
        message: 'Your business has potential but could benefit from some improvements before listing.',
        showProfessionals: true
      };
    } else {
      return {
        title: 'Significant preparation needed',
        message: 'Your business needs substantial improvements before it\'s ready for sale. Consider working with professionals.',
        showProfessionals: true
      };
    }
  };

  const recommendations = getRecommendations(score);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">
            Business Readiness Calculator
          </CardTitle>
          <CardDescription className="text-lg">
            Assess how ready your South African business is for sale and get personalized recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {index + 1}. {question.question}
                  </h3>
                  <RadioGroup
                    value={answers[question.id]?.toString()}
                    onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                  >
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value.toString()} id={`${question.id}-${option.value}`} />
                        <Label htmlFor={`${question.id}-${option.value}`} className="text-foreground cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
              
              <Button 
                onClick={handleSubmit} 
                disabled={!isComplete}
                className="w-full"
                size="lg"
              >
                Calculate Readiness Score
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
                    {score}%
                  </div>
                  <div className="text-xl text-muted-foreground">Readiness Score</div>
                </div>
                <Progress value={score} className="w-full h-4" />
              </div>

              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className={getScoreColor(score)}>
                    {recommendations.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground text-lg">{recommendations.message}</p>
                </CardContent>
              </Card>

              {recommendations.showProfessionals && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground text-center">
                    Recommended South African Professionals
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {professionals.map((professional, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg text-foreground">
                            {professional.name}
                          </CardTitle>
                          <CardDescription className="text-accent font-medium">
                            {professional.specialty}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{professional.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                              <Phone className="h-4 w-4 text-primary" />
                              <a href={`tel:${professional.phone}`} className="text-primary hover:underline">
                                {professional.phone}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Mail className="h-4 w-4 text-primary" />
                              <a href={`mailto:${professional.email}`} className="text-primary hover:underline">
                                {professional.email}
                              </a>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            Contact Now
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center">
                <Button 
                  onClick={() => {
                    setShowResults(false);
                    setAnswers({});
                  }}
                  variant="outline"
                >
                  Take Assessment Again
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}