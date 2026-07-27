import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
  Row,
  Column,
} from "@react-email/components";

interface ProjectInquiryProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ProjectInquiry: React.FC<ProjectInquiryProps> = ({
  name = "Alex Mercer",
  email = "alex@mercer.com",
  subject = "Custom SaaS Platform Development",
  message = "We are looking to re-engineer our core POS engine for higher concurrency. Let's schedule a discovery call.",
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Project Inquiry: {subject} from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={brandText}>NEXORA ENGINEERING</Text>
            <Text style={subBrandText}>Executive Client Briefing</Text>
          </Section>

          {/* Main Content */}
          <Section style={section}>
            <Heading style={heading}>New Project Scope Submitted</Heading>
            <Text style={paragraph}>
              A prospective client has submitted an engineering inquiry through the Nexora website. Here are the project details:
            </Text>

            {/* Client Metadata Card */}
            <Section style={metaCard}>
              <Row style={metaRow}>
                <Column style={metaLabel}>Client Name:</Column>
                <Column style={metaValue}><strong>{name}</strong></Column>
              </Row>
              <Row style={metaRow}>
                <Column style={metaLabel}>Email Address:</Column>
                <Column style={metaValue}>
                  <Link href={`mailto:${email}`} style={link}>{email}</Link>
                </Column>
              </Row>
              <Row style={metaRow}>
                <Column style={metaLabel}>Project Subject:</Column>
                <Column style={metaValue}>
                  <span style={badge}>{subject}</span>
                </Column>
              </Row>
            </Section>

            <Text style={subheading}>Project Description / Scope:</Text>
            <Section style={messageCard}>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Text style={instructionText}>
              💡 <strong>Action Required:</strong> Reply directly to this email to respond to <strong>{name}</strong> (`{email}`).
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Nexora Solutions. Built for digital transformation.
              <br />
              Based in Kandy, Sri Lanka • Serving clients worldwide
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ProjectInquiry;

// Styling tokens for React Email
const main = {
  backgroundColor: "#f1f5f9",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden" as const,
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
};

const header = {
  background: "linear-gradient(135deg, #00E5FF 0%, #6366F1 50%, #FF00FF 100%)",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const brandText = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "800",
  letterSpacing: "2px",
  margin: "0",
};

const subBrandText = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  margin: "4px 0 0 0",
};

const section = {
  padding: "32px",
};

const heading = {
  color: "#0f172a",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0 0 16px 0",
};

const subheading = {
  color: "#334155",
  fontSize: "14px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "24px 0 8px 0",
};

const paragraph = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 24px 0",
};

const metaCard = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "16px 20px",
};

const metaRow = {
  margin: "8px 0",
};

const metaLabel = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: "600",
  width: "140px",
  paddingBottom: "8px",
};

const metaValue = {
  color: "#0f172a",
  fontSize: "14px",
  paddingBottom: "8px",
};

const badge = {
  backgroundColor: "#e0e7ff",
  color: "#4338ca",
  padding: "4px 10px",
  borderRadius: "6px",
  fontWeight: "600",
  fontSize: "13px",
};

const link = {
  color: "#6366f1",
  textDecoration: "underline",
};

const messageCard = {
  backgroundColor: "#0f172a",
  borderRadius: "8px",
  padding: "20px",
};

const messageText = {
  color: "#f8fafc",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const instructionText = {
  color: "#334155",
  fontSize: "13px",
  lineHeight: "20px",
  backgroundColor: "#f1f5f9",
  padding: "12px 16px",
  borderRadius: "6px",
  marginTop: "24px",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "0",
};

const footer = {
  backgroundColor: "#f8fafc",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0",
};
