import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const PricingCalculator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceType, setServiceType] = useState("junk");

    // Junk Removal State
    const [junkVolume, setJunkVolume] = useState({
        vanRate: 130, // Default based on example
        disposalWeight: 1000,
        disposalRate: 135, // per ton
        laborMen: 2,
        laborHours: 3,
        laborRate: 25,
        supplies: 10,
    });

    const [junkResults, setJunkResults] = useState({
        hardCosts: 0,
        targetPrice: 0,
        netProfit: 0,
        brotherPay: 0,
        totalTakeHome: 0,
    });

    // Small Moves State
    const [moveHourly, setMoveHourly] = useState({
        laborCost: 50, // 2 men internal
        vanOverhead: 26,
        adminCost: 10,
        estHours: 3, // Minimum
    });

    const [moveResults, setMoveResults] = useState({
        burnRate: 0,
        targetHourly: 0,
        minTotal: 0,
        estRangeLow: 0,
        estRangeHigh: 0,
    });

    // Calculate Junk Removal
    useEffect(() => {
        const disposalCost = (junkVolume.disposalWeight / 2000) * junkVolume.disposalRate;
        const laborCost = junkVolume.laborMen * junkVolume.laborHours * junkVolume.laborRate;
        const hardCosts = Number(junkVolume.vanRate) + disposalCost + laborCost + Number(junkVolume.supplies);

        // Formula: Price = Cost / 0.60
        const targetPrice = hardCosts / 0.60;
        const netProfit = targetPrice - hardCosts;

        // "Brother Pay" logic from prompt: Labor Pay + Profit
        const brotherPay = laborCost;
        const totalTakeHome = brotherPay + netProfit;

        setJunkResults({
            hardCosts,
            targetPrice,
            netProfit,
            brotherPay,
            totalTakeHome,
        });
    }, [junkVolume]);

    // Calculate Small Moves
    useEffect(() => {
        const burnRate = Number(moveHourly.laborCost) + Number(moveHourly.vanOverhead) + Number(moveHourly.adminCost);

        // Formula: Rate = Cost / 0.60
        const targetHourly = burnRate / 0.60;

        // Market adjustment/rounding could happen here, but sticking to math for now
        // Example says $143 -> $145. Let's round up to nearest 5 for cleanliness? 
        // Or just exact math. Prompt says "$143/hr is a common rate...". 
        // Let's standard round for the "Exact" and maybe a nice round number for display.
        const roundedHourly = Math.ceil(targetHourly);

        const minHours = 3;
        const estHours = Math.max(Number(moveHourly.estHours), minHours);

        // Range: Estimate to Estimate + 1 hour (from example "3-4 hours")
        const estRangeLow = roundedHourly * estHours;
        const estRangeHigh = roundedHourly * (estHours + 1);

        setMoveResults({
            burnRate,
            targetHourly: roundedHourly,
            minTotal: roundedHourly * minHours,
            estRangeLow,
            estRangeHigh,
        });
    }, [moveHourly]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="gap-2 border border-input">
                    <Calculator className="w-4 h-4" />
                    Internal Quote
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Unit Economics & Pricing Calculator</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label>Service Type</Label>
                        <Select value={serviceType} onValueChange={setServiceType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="junk">Junk Removal (Volume)</SelectItem>
                                <SelectItem value="moves">Small Moves (Hourly)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* JUNK REMOVAL CONTENT */}
                    {serviceType === "junk" && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Step 1: Hard Costs</CardTitle>
                                            <CardDescription>What it costs to exist and do the job.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="grid gap-2">
                                                <Label>Van Rental (Daily + Ins + Gas)</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={junkVolume.vanRate}
                                                    onChange={e => setJunkVolume({ ...junkVolume, vanRate: Math.max(0, Number(e.target.value)) })}
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="grid gap-2">
                                                    <Label>Weight (lbs)</Label>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        value={junkVolume.disposalWeight}
                                                        onChange={e => setJunkVolume({ ...junkVolume, disposalWeight: Math.max(0, Number(e.target.value)) })}
                                                    />
                                                </div>
                                                <div className="grid gap-2">
                                                    <Label>Dump Rate ($/ton)</Label>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        value={junkVolume.disposalRate}
                                                        onChange={e => setJunkVolume({ ...junkVolume, disposalRate: Math.max(0, Number(e.target.value)) })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="grid gap-2">
                                                    <Label>Men</Label>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        value={junkVolume.laborMen}
                                                        onChange={e => setJunkVolume({ ...junkVolume, laborMen: Math.max(0, Number(e.target.value)) })}
                                                    />
                                                </div>
                                                <div className="grid gap-2">
                                                    <Label>Hours</Label>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        value={junkVolume.laborHours}
                                                        onChange={e => setJunkVolume({ ...junkVolume, laborHours: Math.max(0, Number(e.target.value)) })}
                                                    />
                                                </div>
                                                <div className="grid gap-2">
                                                    <Label>Rate/Hr</Label>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        value={junkVolume.laborRate}
                                                        onChange={e => setJunkVolume({ ...junkVolume, laborRate: Math.max(0, Number(e.target.value)) })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid gap-2">
                                                <Label>Supplies ($)</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={junkVolume.supplies}
                                                    onChange={e => setJunkVolume({ ...junkVolume, supplies: Math.max(0, Number(e.target.value)) })}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="space-y-4">
                                    <Card className="bg-muted/50">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Step 2: The Profit Formula</CardTitle>
                                            <CardDescription>Target Price = Total Cost / 0.60</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span>Total Hard Costs:</span>
                                                <span className="font-mono">{formatCurrency(junkResults.hardCosts)}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between items-center text-xl font-bold text-primary">
                                                <span>Target Price:</span>
                                                <span>{formatCurrency(junkResults.targetPrice)}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground text-right">Round up to nearest $10 or $25</p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-green-200 bg-green-50 dark:bg-green-900/10">
                                        <CardHeader>
                                            <CardTitle className="text-lg text-green-700 dark:text-green-400">Step 3: Reality Check</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Net Profit (Business):</span>
                                                <span className="font-bold text-green-700 dark:text-green-400">{formatCurrency(junkResults.netProfit)}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-t border-green-200 dark:border-green-800 pt-2">
                                                <span className="text-sm">Total Take-Home (Brothers):</span>
                                                <span className="font-bold">{formatCurrency(junkResults.totalTakeHome)}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                Includes {formatCurrency(junkResults.brotherPay)} labor pay + {formatCurrency(junkResults.netProfit)} profit.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SMALL MOVES CONTENT */}
                    {serviceType === "moves" && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Step 1: Burn Rate (Per Hour)</CardTitle>
                                            <CardDescription>Cost to operate per hour.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="grid gap-2">
                                                <Label>Labor Cost ({junkVolume.laborMen} Men)</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={moveHourly.laborCost}
                                                    onChange={e => setMoveHourly({ ...moveHourly, laborCost: Math.max(0, Number(e.target.value)) })}
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label>Van Overhead (Allocated)</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={moveHourly.vanOverhead}
                                                    onChange={e => setMoveHourly({ ...moveHourly, vanOverhead: Math.max(0, Number(e.target.value)) })}
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label>Insurance / Admin</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={moveHourly.adminCost}
                                                    onChange={e => setMoveHourly({ ...moveHourly, adminCost: Math.max(0, Number(e.target.value)) })}
                                                />
                                            </div>
                                            <Separator className="my-2" />
                                            <div className="flex justify-between font-medium">
                                                <span>Total Burn Rate:</span>
                                                <span>{formatCurrency(moveResults.burnRate)}/hr</span>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Job Estimate</CardTitle>
                                            <CardDescription>Based on hourly expectation.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="grid gap-2">
                                                <Label>Estimated Hours</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={moveHourly.estHours}
                                                    onChange={e => setMoveHourly({ ...moveHourly, estHours: Math.max(0, Number(e.target.value)) })}
                                                />
                                                <p className="text-xs text-muted-foreground">3-Hour Minimum applies automatically.</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="space-y-4">
                                    <Card className="bg-muted/50">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Step 2: Set Your Price</CardTitle>
                                            <CardDescription>Target Rate = Burn Rate / 0.60</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex justify-between items-center text-xl font-bold text-primary">
                                                <span>Target Hourly Rate:</span>
                                                <span>{formatCurrency(moveResults.targetHourly)}/hr</span>
                                            </div>
                                            <div className="p-3 bg-background rounded-md border text-sm space-y-2">
                                                <p className="font-semibold">Example Quote Structure:</p>
                                                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                                                    <li>Rate: {formatCurrency(moveResults.targetHourly)}/hour (2-Man Crew)</li>
                                                    <li>3-Hour Minimum: {formatCurrency(moveResults.minTotal)}</li>
                                                    <li>+30 mins travel fee (standard)</li>
                                                    <li>Stair Fee: $50/flight (if applicable)</li>
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/10">
                                        <CardHeader>
                                            <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Step 3: The Quote</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <p className="text-sm">
                                                "We charge <strong>{formatCurrency(moveResults.targetHourly)}/hr</strong> with a 3-hour minimum."
                                            </p>
                                            <p className="text-sm">
                                                "Based on your list, we estimate <strong>{moveHourly.estHours}–{Number(moveHourly.estHours) + 1} hours</strong>."
                                            </p>
                                            <Separator className="bg-blue-200 dark:bg-blue-800" />
                                            <div className="flex justify-between items-center text-lg font-bold text-blue-700 dark:text-blue-400 pt-2">
                                                <span>Total Range:</span>
                                                <span>{formatCurrency(moveResults.estRangeLow)} – {formatCurrency(moveResults.estRangeHigh)}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                Don't forget to add hidden costs (Mattresses, Walk-ups, Boxes)!
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
