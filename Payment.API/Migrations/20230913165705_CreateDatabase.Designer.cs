﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Payment.API.Data;

#nullable disable

namespace Payment.API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20230913165705_CreateDatabase")]
    partial class CreateDatabase
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Payment.API.Models.PaymentDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CardNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("CardOwnerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ExpirationDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("SecurityCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.HasKey("Id");

                    b.ToTable("PaymentDetail");
                });
#pragma warning restore 612, 618
        }
    }
}