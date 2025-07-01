/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`Success- ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={`${siteMetadata.siteUrl}/success`}
      />
      <PageTitle>{router.query.error ? "送信エラー" : "送信完了"}</PageTitle>
      <div className="flex justify-center">
        <div className="flex">
          <Image src="/static/animation/88696-mail.gif" alt="mail sent icon" width={180} height={180} />
          <span className="origin-left rotate-45 font-caribri text-xs text-gray-500 md:ml-32">
            <sup>LottieFiles by</sup>
            <br />
            <a
              href="https://lottiefiles.com/panizk.kazemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              panizk.kazemi
            </a>
          </span>
        </div>
      </div>
      <div className="container">
        {router.query.error ? (
          <div className="whitespace-pre-line text-red-600">エラーが発生しました: {router.query.error}</div>
        ) : (
          <div className="space-y-6">
            <div className="whitespace-pre-line text-green-600">
              {router.query.data}
              {router.query.id && <div className="mt-4 text-sm text-gray-500">送信ID: {router.query.id}</div>}
            </div>

            {/* 送信内容の表示 */}
            {router.query.name && (
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">送信内容</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>お名前:</strong> {router.query.name}
                  </div>
                  <div>
                    <strong>ご所属:</strong> {router.query.organization}
                  </div>
                  <div>
                    <strong>ご職業:</strong> {router.query.occupation}
                  </div>
                  <div>
                    <strong>ご住所:</strong> {router.query.address}
                  </div>
                  <div>
                    <strong>お電話番号:</strong> {router.query.phone}
                  </div>
                  <div>
                    <strong>メールアドレス:</strong> {router.query.email}
                  </div>
                  {router.query.specialty && (
                    <div>
                      <strong>ご専門分野:</strong> {router.query.specialty}
                    </div>
                  )}
                  {router.query.reference && (
                    <div>
                      <strong>資料ご請求製品名:</strong> {router.query.reference}
                    </div>
                  )}
                  {router.query.message && (
                    <div>
                      <strong>お問い合わせ内容:</strong>
                      <div className="mt-2 whitespace-pre-line rounded border bg-white p-3">{router.query.message}</div>
                    </div>
                  )}
                  <div>
                    <strong>ニュースレター配信:</strong> {router.query.newsletter}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </FluidLayout>
  );
};

export default Success;
