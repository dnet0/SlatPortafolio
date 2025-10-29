export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Johan Salvatierra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
