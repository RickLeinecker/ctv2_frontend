import { useEffect } from "react";
import { NavBar } from "../components/navigation/NavBar";
import { navItems } from "../components/navigation/NavItems";
import { Container } from "@mantine/core";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { RegisterCTA } from "../components/landing/RegisterCTA";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { footerInfo } from "../components/footer/FooterInfo";
import { Footer } from "../components/footer/Footer";
import { motion } from "framer-motion";

export function Landing() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return;

      console.log(user?.email);
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container fluid style={{ padding: 0, marginTop: 120 }}>
        <Hero />
        <Container fluid style={{ backgroundColor: "#001E3C" }}>
          <Features />
        </Container>
        <RegisterCTA />
        <Footer data={footerInfo.data} />
      </Container>
<<<<<<< HEAD
      <RegisterCTA />
    </Container>
=======
    </motion.div>
>>>>>>> kiersten-updates-4
  );
}
