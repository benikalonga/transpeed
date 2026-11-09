import ConsoleShell from '@/components/console/ConsoleShell';

export const metadata = { title: { default: 'Console', template: '%s · Transpeed Console' } };

export default function ConsoleLayout({ children }) {
  return <ConsoleShell>{children}</ConsoleShell>;
}
