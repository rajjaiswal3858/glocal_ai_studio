import { motion } from 'framer-motion'

/** Thin white bar that sweeps across the top on first load. */
export function PageProgressBar() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 1 }}
      animate={{ scaleX: 1, opacity: 0 }}
      transition={{ scaleX: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.3, delay: 0.8 } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#DCAB59',
        zIndex: 9999,
        transformOrigin: 'left',
      }}
    />
  )
}

/** Soft fade/lift applied to page content on load. */
export function PageTransition({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
      {children}
    </motion.div>
  )
}
