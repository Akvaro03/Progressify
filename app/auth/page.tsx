"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ClipboardList, Lock, Mail, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState("login")

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4" style={{ backgroundColor: "#22181C" }}>
            <div className="w-full max-w-md">
                <div className="mb-8 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-[#7A5FFF] p-3">
                        <ClipboardList className="h-8 w-8" style={{ color: "#22181C" }} />
                    </div>
                    <h1 className="text-3xl font-bold text-white">HabitTracker</h1>
                    <p className="mt-2 text-[#8D8E8E]">Construye mejores hábitos, alcanza tus metas</p>
                </div>

                <Card className="border-0" style={{ backgroundColor: "#312F2F" }}>
                    <CardHeader>
                        <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-2" style={{ backgroundColor: "#22181C" }}>
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-[#7A5FFF] data-[state=active]:text-[#22181C] cursor-pointer"
                                >
                                    Iniciar Sesión
                                </TabsTrigger>
                                <TabsTrigger
                                    value="register"
                                    className="data-[state=active]:bg-[#7A5FFF] data-[state=active]:text-[#22181C] cursor-pointer"
                                >
                                    Registrarse
                                </TabsTrigger>
                            </TabsList>

                            <AnimatePresence mode="wait" initial={false}>
                                {activeTab === "login" && (
                                    <motion.div
                                        key="login"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25, bounce: 5, ease: "easeInOut" }}
                                    >
                                        <TabsContent value="login" forceMount>
                                            <CardContent className="mt-4">
                                                <form>
                                                    <div className="grid gap-4">
                                                        <div className="grid gap-2">
                                                            <Label htmlFor="email" className="text-white">
                                                                Email
                                                            </Label>
                                                            <div className="relative">
                                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#8D8E8E]" />
                                                                <Input
                                                                    id="email"
                                                                    type="email"
                                                                    placeholder="ejemplo@correo.com"
                                                                    className="pl-10 bg-[#22181C] border-[#8D8E8E] text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid gap-2">
                                                            <Label htmlFor="password" className="text-white">
                                                                Contraseña
                                                            </Label>
                                                            <div className="relative">
                                                                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#8D8E8E]" />
                                                                <Input
                                                                    id="password"
                                                                    type="password"
                                                                    className="pl-10 bg-[#22181C] border-[#8D8E8E] text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                        <Button
                                                            type="submit"
                                                            className="w-full mt-2 cursor-pointer"
                                                            style={{ backgroundColor: "#7A5FFF", color: "#22181C" }}
                                                        >
                                                            Iniciar Sesión
                                                        </Button>
                                                    </div>
                                                </form>
                                            </CardContent>
                                            <CardFooter>
                                                <p className="text-sm text-center w-full text-[#8D8E8E]">
                                                    ¿Olvidaste tu contraseña?{" "}
                                                    <a href="#" className="text-[#7A5FFF] hover:underline">
                                                        Recuperar
                                                    </a>
                                                </p>
                                            </CardFooter>
                                        </TabsContent>
                                    </motion.div>
                                )}
                                {activeTab === "register" && (
                                    <motion.div
                                        key="register"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25, bounce: 5, ease: "easeInOut" }}
                                    >
                                        <TabsContent value="register" forceMount>
                                            <CardContent className="mt-4">
                                                <form>
                                                    <div className="grid gap-4">
                                                        <div className="grid gap-2">
                                                            <Label htmlFor="name" className="text-white">
                                                                Nombre
                                                            </Label>
                                                            <div className="relative">
                                                                <User className="absolute left-3 top-3 h-4 w-4 text-[#8D8E8E]" />
                                                                <Input
                                                                    id="name"
                                                                    type="text"
                                                                    placeholder="Tu nombre"
                                                                    className="pl-10 bg-[#22181C] border-[#8D8E8E] text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid gap-2">
                                                            <Label htmlFor="register-email" className="text-white">
                                                                Email
                                                            </Label>
                                                            <div className="relative">
                                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#8D8E8E]" />
                                                                <Input
                                                                    id="register-email"
                                                                    type="email"
                                                                    placeholder="ejemplo@correo.com"
                                                                    className="pl-10 bg-[#22181C] border-[#8D8E8E] text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid gap-2">
                                                            <Label htmlFor="register-password" className="text-white">
                                                                Contraseña
                                                            </Label>
                                                            <div className="relative">
                                                                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#8D8E8E]" />
                                                                <Input
                                                                    id="register-password"
                                                                    type="password"
                                                                    className="pl-10 bg-[#22181C] border-[#8D8E8E] text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid gap-2">
                                                            <Label htmlFor="confirm-password" className="text-white">
                                                                Confirmar Contraseña
                                                            </Label>
                                                            <div className="relative">
                                                                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#8D8E8E]" />
                                                                <Input
                                                                    id="confirm-password"
                                                                    type="password"
                                                                    className="pl-10 bg-[#22181C] border-[#8D8E8E] text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                        <Button
                                                            type="submit"
                                                            className="w-full mt-2"
                                                            style={{ backgroundColor: "#7A5FFF", color: "#22181C" }}
                                                        >
                                                            Crear Cuenta
                                                        </Button>
                                                    </div>
                                                </form>
                                            </CardContent>
                                        </TabsContent>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Tabs>
                    </CardHeader>
                </Card>

                <div className="mt-8 flex justify-center space-x-6">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-[#312F2F] p-3">
                            <CheckCircle className="h-6 w-6 text-[#7A5FFF]" />
                        </div>
                        <p className="mt-2 text-sm text-[#8D8E8E]">Seguimiento diario</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-[#312F2F] p-3">
                            <CheckCircle className="h-6 w-6 text-[#7A5FFF]" />
                        </div>
                        <p className="mt-2 text-sm text-[#8D8E8E]">Estadísticas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-[#312F2F] p-3">
                            <CheckCircle className="h-6 w-6 text-[#7A5FFF]" />
                        </div>
                        <p className="mt-2 text-sm text-[#8D8E8E]">Recordatorios</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
