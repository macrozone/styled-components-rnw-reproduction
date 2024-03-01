import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/the-bug">The actual bug</Link>
        <p>
          This leads to wrong styling as the base react-native-web styling is
          applied twice. Notice the missing padding.
        </p>
      </li>
      <li>
        <Link href="/unstyled-ssr">
          With styled components, but no ssr styling
        </Link>
        <p>
          In this example, no server stylesheet is created. It renders correctly
          on the client, but the server result is unstyled
        </p>
      </li>
      <li>
        <Link href="/no-styled-components">
          With StyleSheet.create (no styled components)
        </Link>
        <p>
          in this example react-native-web is directly used without
          styled-components. It renders correctly
        </p>
      </li>
      <li>
        <Link href="/without-client-mount">
          With styled-components and ssr styling, but its not changed on the
          client.
        </Link>
        <p>
          All other examples mount something on the client in a useEffect. For
          reference, this one doesn't and does not show the bug.
        </p>
      </li>
    </ul>
  );
}
