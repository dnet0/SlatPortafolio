import { BackgroundEffects } from "@/components/BackgroundEffects";
import { CustomCard } from "@/components/CustomCard";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const PrivacyPolitice = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen relative p-8 m-auto" ref={ref}>
      <BackgroundEffects />
      <CustomCard
        animate
        isInView={isInView}
        style="flex flex-col items-start text-left flex-wrap"
      >
        {/* Section Title */}
        <h1 className="text-3xl font-medium text-foreground mb-2 text-left">
          PRIVACY POLICY
        </h1>
        <p>
          <strong>Last updated: </strong>
          28/11/2025
        </p>
        <p>
          This Privacy Policy explains how Johan Sebastián Salvatierra Gutiérrez
          (SlatDev) (“we”, “our”, “the Developer”) handles data within our
          mobile applications. We are committed to protecting your privacy and
          maintaining transparency in how our apps operate. We do not collect,
          store, transfer, or process personal data unless explicitly stated in
          the sections for each application. All data described below is used
          solely on the user’s device and is never transmitted to external
          servers.
        </p>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          1. DATA CONTROLLER
        </h2>
        <p>
          <strong>Developer: </strong>
          Johan Sebastián Salvatierra Gutiérrez (SlatDev)
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:"> johansalgut@gmail.com</a>
        </p>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          2. GENERAL PRINCIPLES
        </h2>
        <ul className="list-disc list-inside">
          <li>We do not collect personally identifiable information (PII).</li>
          <li>We do not upload data to servers.</li>
          <li>We do not share data with third parties.</li>
          <li>All processing happens locally on the device.</li>
          <li>
            The user retains full control of permissions and can revoke them at
            any time.
          </li>
        </ul>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          3. PERMISSIONS
        </h2>
        <p>
          Some apps may require specific permissions (e.g., sensors, overlay)
          strictly for proper functionality. We never use permissions for
          tracking, profiling, analytics, or advertising purposes unless stated
          otherwise.
        </p>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          4. YOUR RIGHTS
        </h2>
        <p>
          Since we do not store or process your data externally, you may
          exercise your rights simply by:
        </p>
        <ul className="list-disc list-inside">
          <li>Revoking permissions in your device settings</li>
          <li>Uninstalling the application</li>
          <li>Contacting us at johansalgut@gmail.com if you have questions</li>
        </ul>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          5. APP-SPECIFIC INFORMATION
        </h2>
        <p>Below you will find details for each SlatDev application.</p>
        <div className="indent-8">
          <h2 className="text-xl font-medium text-foreground mb-2 text-left">
            StableFocus
          </h2>
          <h2 className="text-xl font-medium text-foreground mb-2 text-left">
            1. Data Collected
          </h2>
          <p>StableFocus uses the following device sensors and permissions:</p>
          <ul className="list-disc list-inside">
            <li>
              Gyroscope / Rotation Sensor: Used to obtain real-time device
              movement data.
            </li>
            <li>
              Overlay Permission (Draw Over Other Apps): Used exclusively to
              display floating icons when the user exits the app.
            </li>
          </ul>
          <h2 className="text-xl font-medium text-foreground mb-2 text-left">
            2.Purpose of Data Usage
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Sensor data is used to enhance app functionality (e.g., stability
              detection, rotation tracking).
            </li>
            <li>
              Overlay permission is used to display icons or visual elements
              outside the app.
            </li>
          </ul>
          <h2 className="text-xl font-medium text-foreground mb-2 text-left">
            3. Data Storage & Transmission
          </h2>
          <ul className="list-disc list-inside ">
            <li>All sensor data is processed locally and in real time.</li>
            <li>
              No data is stored, saved, logged, uploaded, or transmitted to any
              server.
            </li>
            <li>No data is shared with third parties.</li>
          </ul>
          <h2 className="text-xl font-medium text-foreground mb-2 text-left">
            4. Third-Party Services
          </h2>
          <p>
            StableFocus does not use external SDKs, analytics tools, ads, or
            tracking systems.
          </p>
        </div>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          6. SECURITY
        </h2>
        <p>
          Although no personal data is stored or transmitted, we still follow
          standard security practices to ensure safe app behavior and
          responsible permission usage.
        </p>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          7. CHANGES TO THIS POLICY
        </h2>
        <p>
          We may update this Privacy Policy if new applications are added or if
          functionality changes. Updates will always be published on this same
          page.
        </p>
        <h2 className="text-xl font-medium text-foreground mb-2 text-left">
          8. CONTACT
        </h2>
        <p>
          For any questions regarding privacy or app behavior, contact us at:
        </p>
        <p>
          <strong> Email: </strong>
          johansalgut@gmail.com
        </p>
        <p>
          <strong> Developer: </strong>
          SlatDev
        </p>
      </CustomCard>
    </div>
  );
};
