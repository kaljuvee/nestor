import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Slider } from '@/components/ui/slider.jsx'
import { 
  Globe, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Shield, 
  Building, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Calculator,
  MapPin,
  Clock,
  Award,
  Zap,
  BarChart3
} from 'lucide-react'
import PasswordProtection from './components/PasswordProtection.jsx'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [vaultCount, setVaultCount] = useState([2])
  const [vaultSize, setVaultSize] = useState([150])
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer to August 25, 2025
  useEffect(() => {
    const targetDate = new Date('2025-08-25T23:59:59').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Calculate earnings based on vault parameters
  const calculateEarnings = () => {
    const vaults = vaultCount[0]
    const size = vaultSize[0]
    const totalAUM = vaults * size
    
    const raiseCommission = totalAUM * 0.014 // 1.4% average
    const managementFee = totalAUM * 0.0006 // 0.06% annual
    const tradingFees = totalAUM * 0.0015 // 0.15% average
    
    return {
      total: raiseCommission + managementFee + tradingFees,
      raise: raiseCommission,
      management: managementFee,
      trading: tradingFees
    }
  }

  const earnings = calculateEarnings()

  const ambassadorTiers = [
    {
      tier: "High Performer",
      vaults: "5/year",
      earnings: "€18M/year",
      role: "Tokenize €1B+, lead global vault growth",
      color: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    {
      tier: "Mid Performer", 
      vaults: "2–3",
      earnings: "€4–6M/year",
      role: "Regional vault builder",
      color: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      tier: "Strategic Referrer",
      vaults: "1 every 2 years",
      earnings: "€750K/year", 
      role: "One strong anchor connection",
      color: "bg-gradient-to-r from-blue-600 to-blue-800"
    }
  ]

  const features = [
    { icon: Building, text: "Tokenize €100M+ portfolios" },
    { icon: Users, text: "Assemble LPs or syndicates" },
    { icon: Shield, text: "Launch regulated vaults via NESTOR RAIFs" },
    { icon: DollarSign, text: "Earn from raise, management, and trade" },
    { icon: TrendingUp, text: "Grow token liquidity and AUM over time" },
    { icon: Target, text: "Invite LPs and portfolio owners — earn overrides" }
  ]

  const revenueStreams = [
    { label: "Capital Raised Commission", rate: "1.2–1.6%", description: "of capital raised" },
    { label: "AUM Management Override", rate: "0.06%", description: "annual management fee" },
    { label: "Trading Fee Share", rate: "10–20%", description: "of trading fee revenue" },
    { label: "Vault Profit Share", rate: "Variable", description: "for anchor investors" }
  ]

  const onboardingSteps = [
    { step: 1, title: "Apply", description: "Submit your profile and regional focus" },
    { step: 2, title: "Review", description: "NESTOR team validates your credentials" },
    { step: 3, title: "Confirm", description: "Sign vault partner agreement" },
    { step: 4, title: "Pay", description: "€39,639 onboarding fee via card/crypto" },
    { step: 5, title: "Onboard", description: "Get platform access + token allocation" },
    { step: 6, title: "Launch Vault", description: "Start earning in 30–60 days" }
  ]

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/skyscraper-bg.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Platinum 528 Program
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Become a <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Vault Guardian</span> in the Tokenized <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">$16 Trillion</span> Economy
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Join NESTOR's Platinum 528 — an elite global network of dealmakers, syndicators, and real asset pioneers. Launch tokenized vaults, earn lifetime fees, and shape the future of real-world wealth infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg">
                Apply for a Platinum 528 Seat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-900/50 px-8 py-4 text-lg">
                Learn What You Can Earn
                <Calculator className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Interactive Globe Visualization */}
            <div className="relative mx-auto w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">528</div>
                  <div className="text-sm text-slate-300">Global Seats</div>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-12 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Market & Mission Block */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">Why This Matters</h2>
              <div className="space-y-4 text-lg text-slate-300">
                <p>$16 Trillion of real-world assets will be tokenized by 2030</p>
                <p>The question is not if — but who will structure and lead this transition</p>
                <p>NESTOR is the infrastructure built for this moment</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-600/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$1T</div>
                  <div className="text-slate-300">NESTOR AUM target by 2030</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-600/10 to-blue-700/10 border-blue-600/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">528</div>
                  <div className="text-slate-300">Total Ambassador seats</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-400/10 to-blue-500/10 border-blue-600/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">20%</div>
                  <div className="text-slate-300">$NSTR tokens for Ambassadors</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-700/10 to-blue-800/10 border-blue-600/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2.8%+</div>
                  <div className="text-slate-300">Annual vault fees</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Tiered Ambassador Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ambassadorTiers.map((tier, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-600/30 overflow-hidden">
                <div className={`h-2 ${tier.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{tier.tier}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">{tier.vaults}</Badge>
                    <div className="text-2xl font-bold text-blue-400">{tier.earnings}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{tier.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              See Full Earnings Forecast
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Your Vault. Your Territory. Your Framework.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-600/30 hover:bg-slate-700/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-slate-300">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Earnings Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Revenue Streams Breakdown</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Earn Like a Digital-Era Fund Manager</h3>
              
              <div className="space-y-4 mb-8">
                {revenueStreams.map((stream, index) => (
                  <Card key={index} className="bg-slate-800/50 border-blue-600/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">{stream.label}</div>
                          <div className="text-sm text-slate-400">{stream.description}</div>
                        </div>
                        <div className="text-xl font-bold text-blue-400">{stream.rate}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="bg-slate-800/50 border-blue-600/30">
                <CardHeader>
                  <CardTitle className="text-white">Interactive Earnings Calculator</CardTitle>
                  <CardDescription className="text-slate-400">Adjust parameters to see your potential earnings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-white mb-2 block">Number of Vaults per Year: {vaultCount[0]}</Label>
                    <Slider
                      value={vaultCount}
                      onValueChange={setVaultCount}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">Average Vault Size: €{vaultSize[0]}M</Label>
                    <Slider
                      value={vaultSize}
                      onValueChange={setVaultSize}
                      max={500}
                      min={50}
                      step={25}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6 rounded-lg border border-blue-600/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        €{earnings.total.toFixed(1)}M
                      </div>
                      <div className="text-slate-300">Annual Earnings Potential</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-blue-300">€{earnings.raise.toFixed(1)}M</div>
                        <div className="text-xs text-slate-400">Raise Commission</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-blue-400">€{earnings.management.toFixed(1)}M</div>
                        <div className="text-xs text-slate-400">Management</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-blue-500">€{earnings.trading.toFixed(1)}M</div>
                        <div className="text-xs text-slate-400">Trading</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Enrollment */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-blue-600/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Only 528 Platinum Seats. Lifetime Earnings. Global First-Mover Edge.</h2>
          <p className="text-xl text-slate-300 mb-8">Each territory will be closed once allocated. Vaults are geographically assigned.</p>
          
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300">{timeLeft.days}</div>
              <div className="text-slate-400">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">{timeLeft.hours}</div>
              <div className="text-slate-400">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">{timeLeft.minutes}</div>
              <div className="text-slate-400">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">{timeLeft.seconds}</div>
              <div className="text-slate-400">Seconds</div>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 mb-8">Applications close: August 25, 2025</p>
          
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-xl">
            Apply Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {onboardingSteps.map((step, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-600/30 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Credibility */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Trusted by Industry Leaders</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 opacity-60">
            {['KPMG', 'Phoenix', 'Frictionless', 'EstateGuru', 'Tokeny', 'Swapin'].map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-700 h-16 rounded-lg flex items-center justify-center">
                  <span className="text-slate-300 font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>
          
          <Card className="bg-slate-800/50 border-blue-600/30 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-blue-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-slate-300 mb-4">
                "Tokenizing our portfolio unlocked €80M and transformed our entire business."
              </blockquote>
              <cite className="text-slate-400">— Kaarsilla, Early Anchor</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-blue-700/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            You're not applying to a program. You're claiming your territory in the future of real wealth.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-xl">
              Apply for Platinum 528 Seat
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-900/50 px-8 py-4 text-xl">
              Schedule intro call with the founding team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-white mb-4">NESTOR</div>
          <p className="text-slate-400">Building the infrastructure for tokenized real-world assets</p>
        </div>
      </footer>
    </div>
  )
}

export default App

