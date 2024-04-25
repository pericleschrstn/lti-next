import styles from "@/components/banner.module.css";

export default function Banner({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <section className={`${styles.banner} ${styles.overlay}`}>
      <div className="text-center text-white z-10">
        <p className="text-3xl">{subtitle}</p>
        <h1 className="text-7xl uppercase">{title}</h1>
      </div>
    </section>
  );
}
